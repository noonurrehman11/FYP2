var express = require('express');
var router = express.Router();
var Complaint = require('../models/complaint');




router.get('/getComplaints', function(req, res, next) {
    Complaint.find({}).exec(function(error, results) {
        if (error) {
            return res.json({ success: false, error: error });
        }
        // Respond with valid data
        return res.json({success:true,results});
    });
});

router.get('/getComplaints/:id', function(req, res, next) {
    Complaint.findById(req.params.id)
        .then((resp) => {
            return res.json({ success: true, resp });
        }, (err) => res.json({ success: false, error: err }))
        .catch((err) => res.json({success:false,error:err}));

});

//POST Operations
router.post('/addComplaint', function(req, res, next) {
    console.log("Add Complaint", req.body);
    Complaint.create(req.body)
        .then((resp) => {
            console.log('Complaint has been Added ', resp);
            return res.json({ success: true, resp });
        }, (err) => res.json({ success: false, error: err }))
        .catch((err) => res.json({success:false,error:err}));
});


//Delete Operations
router.delete('/deleteComplaint/:id', function(req, res, next) {
    Complaint.deleteOne({ _id: req.params.id }, function(error, results) {
        if (error) {
            return res.json({ success: false, resp });
        }
        // Respond with valid data
        return res.json({ success: true, resp });
    });
});

module.exports = router;