const express = require('express');
const { json } = require('express');
const router = express.Router();
require('dotenv/config');

// get guest by first name and last name
router.get('/:firstname/:lastname',(req,res)=>{
    const lastname = req.params.lastname;
    const firstname = req.params.firstname;
    res.json({fname:firstname,lname:lastname});
});


//update get info by id
router.patch('/',(req,res)=>{
    const guestId = req.body.id;
    res.json({message : guestId});
});

//guest Checkin 
router.post('/',(req,res)=>{
    firstname = req.body.firstname;
    lastname = req.body.lastname;
    company = req.body.company;
    photo_url = req.body.photo_url;
    DL_url = req.body.DL_url;

    res.json({
        fname:firstname,
        lname:lastname,
        comp:company,
        photo:photo_url,
        dl:DL_url
    });
});

module.exports = router;