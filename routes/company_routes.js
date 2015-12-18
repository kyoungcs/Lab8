var express = require('express');
var router = express.Router();
var gpaDal = require('../dal/company');

router.get('/all', function(req, res) {
    gpaDal.GetAll(function (err, result) {
            if (err) throw err;
            //NOTE: res.send() will return plain text to the browser.
            //res.send(result);

            //res.render() will return render the template provided
            res.render('displayGpa.ejs', {rs: result});
        }
    );
});


router.get('/create', function(req, res, next) {
    res.render('companyFormCreate.ejs', { subtitle: 'Lab 9' });
});

router.get('/save', function(req, res, next) {
    console.log("Company name equals: " + req.query.cname);
    gpaDal.Insert(req.query, function(err, result){
        if (err) {
            res.send(err);
        }
        else {
            res.send("Successfully saved the data.");
        }
    });
});

module.exports = router;