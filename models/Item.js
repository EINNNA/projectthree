var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ItemSchema = new Schema({
    name: String,
    price: String
    // picture: String,
    // time: String
});

var Item = mongoose.model("Item", ItemSchema);

module.exports = Item;