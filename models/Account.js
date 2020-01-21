var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var AccountSchema = new Schema({
    username: String,
    items: {
        type: Schema.Types.ObjectId,
        ref: "Item"
    },
    note: {
        type: Schema.Types.ObjectId,
        ref: "Note"
    }
});

var Account = mongoose.model("Account", AccountSchema);

module.exports = Account;