const context = require('../DAL/ConnectDB');
const sql = context.sql;

module.exports = {
    GetPosts: (callback) => {
        context.dbPool.connect().then(() => {
            const dbreq = context.dbPool.request();

            dbreq.execute('SP_GetPosts', (err, data) => {
                if (err)
                    callback(err);
                else {
                    callback(data.recordset);
                }
                context.dbPool.close();
            });
        })
    },

    GetPostsByPublisher: (userName, callback) => {
        context.dbPool.connect().then(() => {
            const dbreq = context.dbPool.request();
            dbreq.input('UserName',sql.NVarChar(50),userName);
            dbreq.execute('SP_GetPostsByPublisher', (err, data) => {
                if (err)
                    callback(err);
                else {
                    callback(data.recordset);
                }
                context.dbPool.close();
            });
        })
    },


    GetPostsByRangeDate: (rangeDate, callback) => {
        context.dbPool.connect().then(() => {
            const dbreq = context.dbPool.request();
            dbreq.input('FromDate',sql.DateTime2(7),rangeDate.fromDate);
            dbreq.input('ToDate',sql.DateTime2(7),rangeDate.toDate);
            dbreq.execute('SP_CheckRangeOfDate', (err, data) => {
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