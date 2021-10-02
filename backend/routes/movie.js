var express = require('express');
var router = express.Router();
var Movie = require('../models/movie');




router.get('/getMovies', function(req, res, next) {
    Movie.find({}).sort('name').exec(function(error, results) {
        if (error) {
            return res.json({ success: false, error: error });
        }
        // Respond with valid data
        return res.json({success:true,results});
    });
});

router.get('/getMovies/:id', function(req, res, next) {
    Movie.findById(req.params.id)
        .then((resp) => {
            return res.json({ success: true, resp });
        }, (err) => res.json({ success: false, error: err }))
        .catch((err) => res.json({success:false,error:err}));

});

//POST Operations
router.post('/addMovie', function(req, res, next) {
    console.log("Movie", req.body);
    Movie.create(req.body)
        .then((resp) => {
            console.log('Movie has been Added ', resp);
            return res.json({ success: true, resp });
        }, (err) => res.json({ success: false, error: err }))
        .catch((err) => res.json({success:false,error:err}));
});

//PUT Operations

router.put('/updateMovie/:id', function(req, res, next) {
    Movie.findOneAndUpdate({ _id: req.params.id }, 
        { 
            name: req.body.name,
            summary: req.body.summary,
            release_Date: req.body.release_Date,
            cast: req.body.cast,
            views: req.body.views,
            status: req.body.status,
            movieLink: req.body.movieLink,
            trailerLink: req.body.trailerLink,
            picture:req.body.picture 
        }, function(error, results) {
        if (error) {
            return res.json({ success: false, error });
        }
        // Respond with valid data
        return res.json({ success: true, resp });
    });
});


//Delete Operations
router.delete('/deleteMovie/:id', function(req, res, next) {
    Movie.deleteOne({ _id: req.params.id }, function(error, results) {
        if (error) {
            return res.json({ success: false, resp });
        }
        // Respond with valid data
        return res.json({ success: true, resp });
    });
});

module.exports = router;