var mysql   = require('mysql');
var db  = require('./db_connection.js');

/* DATABASE CONFIGURATION */
var connection = mysql.createConnection(db.config);

exports.GetAll = function(callback) {
    connection.query('SELECT * FROM schools;',
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


exports.GetByID = function(school_id, callback) {
    console.log(school_id);
    var query = 'SELECT * FROM schools WHERE school_id=' + school_id;
    console.log(query);
    connection.query(query,
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            callback(false, result);
        }
    );
}



exports.Insert = function(school_info, callback) {

    console.log(school_info);

    var dynamic_query = 'INSERT INTO schools (sname, state, city, zip, street) VALUES (' +
        '\'' + school_info.sname + '\', ' +
        '\'' + school_info.state + '\', ' +
        '\'' + school_info.city + '\', ' +
        '\'' + school_info.zip + '\', ' +
        '\'' + school_info.street + '\'' +
        ');';

    console.log("test");
    console.log(dynamic_query);

    connection.query(dynamic_query,

        function (err, result) {

            if(err) {

                console.log(err);
                callback(true);
                return;
            }

            callback(false, result);
        }
    );
}
