function generateName() {
    let chosenColor = Math.floor(Math.random() * Math.floor(colors.length));
    chosenColor = colors[chosenColor];

    let chosenNoun = Math.floor(Math.random() * Math.floor(nouns.length));
    chosenNoun = nouns [chosenNoun];

    let chosenVerb = Math.floor(Math.random() * Math.floor(verbs.length));
    chosenVerb = verbs [chosenVerb];

    return(`${chosenColor}${chosenNoun}${chosenVerb}`);
};


const colors = [
    "red",
    "blue",
    "purple",
    "grey",
    "pink",
    "green",
    "velvet",
    "yellow",
    "orange",
    "yup"
];

const nouns = [
    "flower",
    "cat",
    "dog",
    "house",
    "whale",
    "milkshake",
    "car",
    "plane",
    "booger",
    "yup"
];

const verbs = [
    "running",
    "yeeting",
    "crying",
    "killing",
    "sleeping",
    "singing",
    "flying",
    "walking",
    "sneaking",
    "dying",
    "yup"
];

module.exports = generateName;