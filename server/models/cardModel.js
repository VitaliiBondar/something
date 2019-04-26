const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const CardsSchema = new Schema(
    {
        id: Number,
        title: String,
        name: String
    },
    { timestamps: true }
);

module.exports = mongoose.model('Cards', CardsSchema);