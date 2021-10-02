var express = require('express');
var router = express.Router();
var MovieRequest = require('../models/movieRequest');




router.get('/requestMovies', function(req, res, next) {
    MovieRequest.find({}).exec(function(error, results) {
        if (error) {
            return res.json({ success: false, error: error });
        }
        // Respond with valid data
        return res.json({success:true,results});
    });
});

router.get('/requestMovies/:id', function(req, res, next) {
    MovieRequest.findById(req.params.id)
        .then((resp) => {
            return res.json({ success: true, resp });
        }, (err) => res.json({ success: false, error: err }))
        .catch((err) => res.json({success:false,error:err}));

});

//POST Operations
router.post('/addMovieRequest', function(req, res, next) {
    console.log("Movie Request", req.body);
    MovieRequest.create(req.body)
        .then((resp) => {
            console.log('Movie Request has been Added ', resp);
            return res.json({ success: true, resp });
        }, (err) => res.json({ success: false, error: err }))
        .catch((err) => res.json({success:false,error:err}));
});


//Delete Operations
router.delete('/deleteMovieRequest/:id', function(req, res, next) {
    MovieRequest.deleteOne({ _id: req.params.id }, function(error, results) {
        if (error) {
            return res.json({ success: false, resp });
        }
        // Respond with valid data
        return res.json({ success: true, resp });
    });
});

module.exports = router;