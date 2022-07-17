const mysql = require('mysql2');
// MySQL Connection
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'alex123',
    database: 'MovieApp'
});

//pool.((error) => {
   // if(error) throw error;
  // console.log('DB Connected');
//})
module.exports = pool.promise();