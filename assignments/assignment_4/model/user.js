const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    name : String,
    email : String,
    age: Number,
    city: String,
    profession: String, 
    selected: Boolean
})

const candidateDetail = mongoose.model("candidateDetails", userSchema);
module.exports = candidateDetail;