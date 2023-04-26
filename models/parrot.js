const mongoose = require("mongoose")
const parrotSchema = mongoose.Schema({
    parrot_color: {type : String, minlength : 1, maxlength:50},
    parrot_weight: {type : String, minlength : 1, maxlength:50},
    parrot_cost: {type : String, minlength : 1, maxlength:50}
})
module.exports = mongoose.model("parrot",parrotSchema)