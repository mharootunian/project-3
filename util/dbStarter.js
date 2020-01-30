const axios = require('axios');
require('dotenv').config();
// Import faces.json
const faces = require("./faces.json");

// forEach on faces.json --> Axios call to get images
const apiKey = process.env.MYAPIKEY;
let peopleArr = [

];

faces.forEach(category => {
    category.people.forEach(person => {
        axios.get(`https://api.themoviedb.org/3/search/person?api_key=${apiKey}&language=en-US&query=${person}&page=1&include_adult=false`)
            .then(response => {
                let newPerson = {
                    name: person,
                    img: response.data.results[0].profile_path
                };
                peopleArr.push(newPerson);
            });
    });
    // db.save() peopleArr
});
    