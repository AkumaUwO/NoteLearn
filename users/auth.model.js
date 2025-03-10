const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    name: {
        type: String,
        required: true,
        trim: true

    },
    username: {
       type: String,
       required: true,
       trim: true,
       unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true
        
    },
    role:{
        type: String,
        required: true,
        trim: true
    }
    
},{
    timestamps: true
});

module.exports = userSchema;