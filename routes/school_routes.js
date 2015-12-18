var express = require('express');
var router = express.Router();
var schoolsDal = require('../dal/schools');

router.get('/all', function(req, res) {
    schoolsDal.GetAll(function (err, result) {
            if (err) throw err;
            //NOTE: res.send() will return plain text to the browser.
            //res.send(result);

            //res.render() will return render the template provided
            res.render('displayAllSchools.ejs', {rs: result});
        }
    );
});

router.get('/', function (req, res) {
    schoolsDal.GetByID(req.query.school_id, function (err, result) {
            if (err) throw err;

            res.render('displaySchoolInfo.ejs', {rs: result, school_id: req.query.school_id});
        }
    );
});


router.get('/create', function(req, res, next) {
    res.render('schoolsFormCreate.ejs', { subtitle: 'Lab 9' });
});

router.get('/save', function(req, res, next) {
    console.log("School name is: " + req.query.sname);
    console.log("the State submitted was: " + req.query.state);
    console.log("the City submitted was: " + req.query.city);
    console.log("the Zip submitted was: " + req.query.zip);
    console.log("the Street submitted was: " + req.query.street);
    schoolsDal.Insert(req.query, function(err, result){
        if (err) {
            res.send(err);
        }
        else {
            res.send("Successfully saved the data.");
        }
    });
});

module.exports = router;