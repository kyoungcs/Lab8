var mysql   = require('mysql');
var db  = require('./db_connection.js');

/* DATABASE CONFIGURATION */
var connection = mysql.createConnection(db.config);

exports.GetAll = function(callback) {
    connection.query('SELECT a.account_id AS account_id, a.fname AS fname, a.lname AS lname, u.cname AS cname,' +
        'u.discription AS discription from UserJobView u JOIN accounts a ON a.email=u.email ORDER BY a.lname;',
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            console.log(result);
            callback(false, result);
        }
    );
}