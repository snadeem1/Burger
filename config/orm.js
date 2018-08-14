var connection = require('./connection.js');

var orm = {

    selectAll: function(cb) {

        // Run MySQL Query
        connection.query('SELECT * FROM burgers', function (err, result) {
          if (err) throw err;
          cb(result);
        });
    
      },
}





module.exports = orm;