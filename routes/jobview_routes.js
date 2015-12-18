var express = require('express');
var router = express.Router();
var jobviewDal   = require('../dal/jobview');

router.get('/all', function(req, res) {
    jobviewDal.GetAll(function (err, result) {
            if (err) throw err;
            //NOTE: res.send() will return plain text to the browser.
            //res.send(result);

            //res.render() will return render the template provided
            res.render('displayJobView.ejs', {rs: result});
        }
    );
});

module.exports = router;