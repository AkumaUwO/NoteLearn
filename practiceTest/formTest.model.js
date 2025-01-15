const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const practiceTestSchema = new Schema ({
    time: [{
        type: Number,
        required: true,
        trim: true
    }],
    notes: [{
        type: String,
        required: true,
        trim: true
    }]
},{
    timestamps: true
});

module.exports = practiceTestSchema;