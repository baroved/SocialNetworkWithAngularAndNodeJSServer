var sql = require("mssql/msnodesqlv8");

// config for your database
var config = {
    database: 'DB',
    server: '(localdb)\\FakeLook',
    driver: 'msnodesqlv8',
    options: {
        trustedConnection: true
    }
};

const dbPool = new sql.ConnectionPool(config);


module.exports = {dbPool, sql};