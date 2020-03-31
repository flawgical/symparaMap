const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const mapSchema = new Schema({
    name: String,
},{
    timestamps: true
});

// Compile the schema into a model and export it
module.exports = mongoose.model('Map', mapSchema);