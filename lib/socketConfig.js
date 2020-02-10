const Game = require("./Game");
const Player = require("./Player");

module.exports = function Socket(io) {

    console.log("socketConfig loaded.");

    let sockets = {};

    let ongoingGames = [];
    let waitingGames = [];
    let connectedPlayers = [];

    io.on('connection', function (socket) {
        console.log('a user connected');
        socket.broadcast.emit("msg", {msg: "Another user has connected!"});
        socket.emit("msg", {msg: "Welcome new user!"});

        //on client create user
        socket.on("user.create", data => {
            console.log("user.create triggered");
            socket.username = data;
            sockets[socket.id] = socket;

            for (let i in sockets) {
                console.log("iterate through and sent clients");
                socket.emit("user.add", {
                    username: sockets[i].username,
                    id: sockets[i].id
                });
            }
            socket.broadcast.emit("user.add", {
                username: sockets[socket.id].username,
                id: sockets[socket.id].id
            });
            console.log("new user emitted to all");
        });

        //on client disconnect
        socket.on('disconnect', payload => {
            io.emit("user.remove", socket.id);
            delete sockets[socket.id];
        });

        //on client message
        socket.on("msg", payload => {
            if (payload.type === "global")
                io.emit("msg", payload); // send to all except server
            if (payload.type === "local")
                console.log("local message received");
            if (payload.type === "private")
                io.to(payload.toSocketId).emit("msg", "hey, this is a pm");

            console.log("received msg: ", payload.type);
            // console.log("received msg: ", JSON.parse(payload).type);
        });

        //on client guess the opposition's portrait
        socket.on("action", payload => {
            if (payload.type === "hideCards") {
                const cardArray = payload.cardArray;
                io.emit("msg", payload); // send to all except server
            }
            if (payload.type === "makeGuess") {
                console.log("Player made a guess");
            }
            console.log("received guess: ", payload.type);
            // console.log("received msg: ", JSON.parse(payload).type);
        });

        socket.on("game", payload => {
            if (payload.type === "createGame") {
                const game = new Game(new Player("player1", socket), "80s hearthrob", io);
                waitingGames.push(game);
                socket.emit("gameCreated", {
                    type: "gameCreated",
                    message: "Game created!",
                    gameName: game.name,
                    category: game.category
                });
                console.log(`Game created: ${game.name}`);
            }
            if (payload.type === "findGames") {
                waitingGames.forEach(game => {
                    console.log(game.name);
                });
                socket.emit("game", waitingGames);
            }
            if (payload.type === "joinGame") {
                waitingGames.forEach(game => {
                    if (game.name === payload.name) {
                        socket.emit("game", {
                            category: game.category,
                            gameName: game.name
                        });
                        game.startGame();
                        console.log("game joined");
                    }
                });
            }
        });
    });
};