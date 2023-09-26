import mongoose from "mongoose";

const collection = 'Users'

const schema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },

    lastName: {
        type: String,
        require: true
    },

    email: {
        type: String,
        require: true,
        unique: true
    },

    image: {
        type: String,
        require: false,

    },

    birthday: {
        type: String,
        require: true,
        unique: false
    },

    role: {
        type: String,
        require: true
    },

    buyer: {
        type: Boolean,
        default: false
    },

    status: {
        type: String,
        enum: ["active", "disabled"],
        default: "active",
    },

    password: {
        type: String,
        require: true
    }
})

const modelUsers = mongoose.model(collection, schema)

export default modelUsers