const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const leaderschema = new Schema({
        name: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true
        },
        designation: {
            type: String,
        },
        abbr: {
        type: String,
        required: true
        },
        description: {
            type: String,
            required: true
        },
        featured: {
            type:Boolean,
            required: true
        }
    }

);
var Leader = mongoose.model('leader', leaderschema);
module.exports = Leader;