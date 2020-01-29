const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    categoryName: {
        type: String,
        required: true
    },
    people: [{
        name: {
            type: String,
            required: true
        },
        img: {
            type: String,
            required: true
        }
    }]
});

const Category = mongoose.model("Category", CategorySchema);

module.exports = Category;