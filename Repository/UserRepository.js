const context = require('../DAL/ConnectDB');
const bcryptService = require('../Api/Services/bcrypt');
const sql = context.sql;

CheckUserNameExists = (userName, callback) => {
    context.dbPool.connect().then(() => {
        const dbreq = context.dbPool.request();

        dbreq.input('UserName', sql.NVarChar(10), userName);
        dbreq.execute('SP_CheckUserExists', (err, data) => {
            context.dbPool.close();
            if (err)
                callback(err);
            else
                callback(data.recordset[0]);

        });
    });
}

module.exports = {
    Login: (name, password, callback) => {

        CheckUserNameExists(name, (res) => {
            var result = {
                flag: false,
                data: res
            };
            if (res) {
                if (bcryptService().comparePassword(password, res.Password))
                    result.flag = true;
            }
            console.log(result);

            callback(result);
        });

    },


    GetUsersByFilter: (userName, callback) => {

        context.dbPool.connect()
            .then(() => {
                const dbreq = context.dbPool.request();
                dbreq.input('UserName', sql.NVarChar(50), userName);
                dbreq.execute('SP_GetUsersByFilter', (err, data) => {
                    if (err)
                        callback(err);
                    else
                        callback(data.recordset);
                    context.dbPool.close();
                });

            });

    },


    Register: (user, callback) => {
        CheckUserNameExists(user.UserName, (res) => {
            if (res) {
                callback(false);
            } else {
                var hash = bcryptService().password(user);
                context.dbPool.connect()
                    .then(() => {
                        const dbreq = context.dbPool.request();

                        dbreq.input('Name', sql.NVarChar(30), user.Name);
                        dbreq.input('Email', sql.NVarChar(40), user.Email);
                        dbreq.input('Password', sql.NVarChar(60), hash);
                        dbreq.input('ImageSrc', sql.NVarChar(200), user.ImgSrc);
                        dbreq.input('DateOfBirth', sql.Date, user.DateOfBirth);
                        dbreq.input('WorkAddress', sql.NVarChar(100), user.WorkAddress);
                        dbreq.input('IsAdmin', sql.Bit, user.IsAdmin);
                        dbreq.input('UserName', sql.NVarChar(10), user.UserName);
                        dbreq.execute('SP_InsertUser', (err, data) => {
                            if (err)
                                callback(err);
                            else
                                callback(true);
                            context.dbPool.close();
                        });
                    })
            }
        });
    }
}