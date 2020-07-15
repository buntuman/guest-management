const express = require('express');
const { json } = require('express');
const Guest = require('../models/Guest');
const router = express.Router();

// get all guests
router.get('/',async (req,res)=>{

    const guest = await Guest.find();
    res.json(guest);
});

// get all checked in guest
router.get('/checkedIn',async (req,res)=>{

    const guest = await Guest.find({checkIn:true});
    res.json(guest);
});

// get guest by first name and last name
router.get('/:firstname/:lastname',async (req,res)=>{

    
    const lastname = req.params.lastname;
    const firstname = req.params.firstname;

    const guest = await Guest.find({lastname:lastname,firstname:firstname});
    res.send(guest);
});


//update get info by id
router.patch('/',async (req,res)=>{
    const guestId = req.body.id;
    const checkedIn = req.body.checkedIn;
    try {
        const updatedGuest = await Guest.updateOne({_id:guestId},{$set:{checkedIn:checkedIn}});
        res.json(updatedGuest);
    } catch (error) {
        
    }
    
    
});

//guest Checkin 
router.post('/',async (req,res)=>{

    // populate model
    const guest = new Guest({
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        company : req.body.company,
        photo_url : req.body.photo_url,
        DL_url : req.body.DL_url,
        checkedIn:req.body.checkedIn
    });

    try {
        const savedGuest = await guest.save();
        res.json(savedGuest);
    } catch (err) {
        res.json({error:err})
        console.log(err);
    }

    /*
    res.json({
        fname:firstname,
        lname:lastname,
        comp:company,
        photo:photo_url,
        dl:DL_url
    });*/
});

module.exports = router;