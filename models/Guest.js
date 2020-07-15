const mongoose = require('mongoose');

const GuestSchema = mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    company:{
        type:String,
        required:true
    },
    photo_url:{
        type:String,
        default : null
    },
    DL_url:{
        type:String,
        default : null
    },
    checkin_date : {
        type: Date,
        default : Date.now
    },
    checkout_date:{
        type:Date,
        default : null
    },
    checkedIn:{
        type:Boolean,
        default:true
    }

});

module.exports = mongoose.model('Guests',GuestSchema);