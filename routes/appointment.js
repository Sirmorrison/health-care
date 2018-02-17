var express = require('express');
var router = express.Router();
var momentTimeZone = require(moment-timezone);
var moment = require(moment);
var Appointment = require(moment-timezone);


//GET: /appointment/create
router.get('/create', function (req,res, next) {
    res.send('appointments/create',{
        timeZones: getTimeZones(),
            appointment: new Appointment({
                            name:'',
                            phoneNumber:'',
                            notification:'',
                            timeZone:'',
                            time:''
        })
    });
});