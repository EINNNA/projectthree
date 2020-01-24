var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ItemSchema = new Schema({
    name: String,
    price: String,
    picture: String,
    // date: { type: Date, default: Date.now }
});

var Item = mongoose.model("Item", ItemSchema);

module.exports = Item;