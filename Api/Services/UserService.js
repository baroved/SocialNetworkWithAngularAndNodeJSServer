const userRepository = require('../../Repository/UserRepository');



module.exports = {
    Login: (name, password, callback) => {
        return userRepository.Login(name, password, callback);
    },

    GetUsersByFilter: (userName, callback) => {
        return userRepository.GetUsersByFilter(userName, callback);
    },

    Register: (user, callback) => {
        return userRepository.Register(user, callback);
    }
};