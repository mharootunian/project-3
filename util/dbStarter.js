const axios = require('axios');
require('dotenv').config();
const mongoose = require('mongoose');
const db = require("../models");
const faces = require("./faces.json");

let MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/facesTestDB";

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// forEach on faces.json --> Axios call to get images
const apiKey = process.env.MYAPIKEY;

faces.forEach(category => {
    category.people.forEach(person => {
        axios.get(`https://api.themoviedb.org/3/search/person?api_key=${apiKey}&language=en-US&query=${person}&page=1&include_adult=false`)
            .then(response => {
                let newPerson = {
                    name: person,
                    img: response.data.results[0].profile_path
                };
                db.Category.findOneAndUpdate(
                    { categoryName: category.category },
                    { $push: { people: newPerson } },
                    { upsert: true },
                    (err, doc) => {
                        if (err) {
                            console.log(err);
                        }
                        else {
                            console.log(`Person added: ${doc}`);
                        };
                    }
                );
            });
    });
});

