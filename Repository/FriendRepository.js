const context = require('../DAL/ConnectDB');
const sql = context.sql;

module.exports = {
    GetFriendsById: (userId, callback) => {
        context.dbPool.connect().then(() => {
            const dbreq = context.dbPool.request();

            dbreq.input('UserId', sql.Int, userId);
            dbreq.execute('SP_GetFriendsByUserId', (err, data) => {
                if (err)
                    callback(err);
                else {
                    callback(data.recordset);
                }
                context.dbPool.close();
            });
        })
    },
}