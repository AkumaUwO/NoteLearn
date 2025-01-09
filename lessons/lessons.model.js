const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LessonsSchema = new Schema ({
    title: {
        type: String,
        required: true,
        trim: true
    },
    content: {
        type: String,
        required: true,
        trim: true
    }
},{
    timestamps: true
});

module.exports = LessonsSchema;