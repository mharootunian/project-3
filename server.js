require('dotenv').config();
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

let MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/facesTestDB";

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// Define API routes here
// app.get('/api/images/:category', (req, res) => {
//     const query = {categoryName: req.params.category};
//     console.log(req.params);
//     db.Category.find(query, (err, docs) => {
//       if (err) {
//         console.log(err)
//       }
//       else {
//         console.log(`Images retrieved: ${docs}`);
//       };
//     });
//     res.end();
// });

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
