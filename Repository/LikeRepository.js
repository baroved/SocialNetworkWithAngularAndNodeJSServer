const context = require('../DAL/ConnectDB');
const sql = context.sql;

module.exports = {

    CheckLikeExists: (newLike, callback) => {
        context.dbPool.connect().then(() => {
            const dbreq = context.dbPool.request();
            dbreq.input('UserId', sql.Int, newLike.UserId);
            dbreq.input('PostId', sql.Int, newLike.PostId);
            dbreq.execute('SP_CheckLikeExists', (err, data) => {
                context.dbPool.close();
                if (err) {
                    callback(err);
                } else {
                    const result = data.recordset[0]
                    callback(result);
                }

            });
        });
    },


    GetLikes: (postId, callback) => {
        context.dbPool.connect().then(() => {
            const dbreq = context.dbPool.request();

            dbreq.input('postId', sql.Int, postId);
            dbreq.execute('SP_GetLikes', (err, data) => {
                if (err)
                    callback(err);
                else {
                    callback(data.recordset);
                }
                context.dbPool.close();
            });
        })
    },

    AddLike: (newLike, callback) => {
        module.exports.CheckLikeExists(newLike, (res) => {

            try {
                context.dbPool.connect().then(() => {
                    const dbreq = context.dbPool.request();

                    dbreq.input('UserId', sql.Int, newLike.UserId);
                    dbreq.input('PostId', sql.Int, newLike.PostId);

                    if (res) {
                        dbreq.execute('SP_DeleteLike', (err, data) => {
                            context.dbPool.close();
                            if (err) {
                                callback(err);
                            } else {
                                callback(false);
                            }
                        });
                    } else {

                        dbreq.execute('SP_InsertLike', (err, data) => {
                            context.dbPool.close();
                            if (err) {
                                callback(err);
                            } else {
                                callback(true);
                            }
                        });
                    }



                });
            } catch (err) {
                console.log(err);
            }
        });

    }

}