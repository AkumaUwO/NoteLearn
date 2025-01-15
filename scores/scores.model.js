const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const scoresSchema = new Schema ({
    score: [{
        type: Number,
        required: true,
        trim: true
    }],
    username: [{
        type: String,
        required: true,
        trim: true
    }],
    lessonNumber: [{
        type: Number,
        required: true,
        trim: true
    }]
},{
    timestamps: true
});

module.exports = scoresSchema;