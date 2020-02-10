function generateName() {
    let chosenColor = Math.floor(Math.random() * Math.floor(descriptors.length));
    chosenColor = descriptors[chosenColor];

    let chosenNoun = Math.floor(Math.random() * Math.floor(nouns.length));
    chosenNoun = nouns [chosenNoun];

    let chosenVerb = Math.floor(Math.random() * Math.floor(verbs.length));
    chosenVerb = verbs [chosenVerb];

    return(`${chosenColor}-${chosenNoun}-${chosenVerb}-${randomNumber()}`);
};

const randomNumber = () => Math.floor(Math.random() * 100000);

const descriptors = [
    "your-neighbors",
    "that",
    "ethans",
    "lame",
    "super",
    "retired",
    "jiggly",
    "cowardly",
    "your-sisters",
    "carnivorous",
];

const nouns = [
    "cthulu",
    "tasseled-wobbegong",
    "strange-tailed-tyrant",
    "gorgon",
    "mustached-puffbird",
    "ethan-the-ta",
    "spiny-lumpsucker",
    "satan",
    "lab-monster",
    "escaped-tiger-from-the-zoo",
    "uncle-bob",
];

const verbs = [
    "give-you-the-eyes",
    "yeeting",
    "upchucking-the-boogie",
    "dilly-dallying",
    "eerily-edging-closer",
    "creepily-watching",
    "doing-that-thing-again",
    "putting-it-away-now",
    "realizing-that-was-racist",
    "realizing-that-lady-wasnt-pregnant",
    "realizing-thats-his-sister",
    "still-going-for-it",
    "cheesing-it",
    "ripping-a-fat-one",
    "goopifying",
    "loling",
    "jking"
];

module.exports = generateName;