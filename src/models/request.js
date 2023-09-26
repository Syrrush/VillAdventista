import mongoose from "mongoose";

const collection = 'request'

const schema = new mongoose.Schema({

    article: {
        type: Array,
        require: true
    },

    description: {
        type: String
    },

    date: {
        type: Date,
        require:               true,
        unique: true
    },

    expiration: {
        type: Date,
        require: true,
        unique: false
    },

    buyer: {
        type: String,
        require: true,
        unique: false
    },

    price: {
        type: String,
        require: true,
        unique: false
    },

    reward: {
        type: String,
        require: false,
        unique: false
    },

    urgency: {
        type: Boolean,
        default: false,
    }
})

const modelRequest = mongoose.model(collection, schema)

export default modelRequest