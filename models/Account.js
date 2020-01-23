var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var AccountSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: 'Username is required'
    },
    email: {
        type: Schema.Types.ObjectId,
        ref: "Email"
    },   
    // {
    //     type: String,
    //     unique: true,
    //     required: 'Email address is required',
    //     validate: [validateEmail, 'Please fill a valid email address'],
    //     match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    // },
    premium: {
        type: Boolean,
        default: false
        
    },
    // online: {
    //     type: Boolean,
    //     default: false
    // },
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