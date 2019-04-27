const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UsersSchema = new Schema(
    {
        firstName: String,
        lastName: String,
        login: String,
        email:String,
        password:String
    },
    { timestamps: true }
);

module.exports = mongoose.model('Users', UsersSchema);