const mysql = require('mysql2');
// MySQL Connection
const pool = mysql.createPool({
    host: 'eu-cdbr-west-03.cleardb.net',
    user: 'b9cd5f975bc5d7',
    password: '578fdce0',
    database: 'heroku_84abb48472d28b4'
});

module.exports = pool.promise();
