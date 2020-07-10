const context = require('../DAL/ConnectDB');
const sql = context.sql;


module.exports = {
    GetComments: (postId,callback) => {
        context.dbPool.connect().then(() => {
            const dbreq = context.dbPool.request();
            
            dbreq.input('postId', sql.Int, postId);
            dbreq.execute('SP_GetComments',(err, data) => {
                if (err)
                    callback(err);
                else {
                    callback(data.recordset);
                    console.log(data.recordset)
                }
                context.dbPool.close();
            });
        })
    },


    AddComment: (comment,callback) => {
        context.dbPool.connect().then(() => {
            const dbreq = context.dbPool.request();
            
            dbreq.input('PostId', sql.Int, comment.PostId);
            dbreq.input('UserId', sql.Int, comment.UserId);
            dbreq.input('Date', sql.DateTime, comment.Date);
            dbreq.input('Text', sql.NVarChar(100), comment.Text);
            
            
            dbreq.execute('SP_InsertComment',(err, data) => {
                if (err)
                    callback(err);
                else {
                    callback(true);
                }
                context.dbPool.close();
            });
        })
    },

    
}