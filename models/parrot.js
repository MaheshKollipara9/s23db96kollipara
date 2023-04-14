const mongoose = require("mongoose")
const parrotSchema = mongoose.Schema({
    parrot_color: String,
    parrot_weight: String,
    parrot_cost: String
})
module.exports = mongoose.model("Parrot",parrotSchema)