const mongoose = require('mongoose');

const { Schema } = mongoose;

const antiqueschema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String,
    },
    price: {
        type: Number,
        min: 0.99,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
    }
});

const Antique = mongoose.model('Antique', antiqueschema);

module.exports = Antique;