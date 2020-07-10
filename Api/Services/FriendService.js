const friendRepository = require('../../Repository/FriendRepository');



module.exports = {
    GetFriendsByUserId: (userId,callback) =>{
        return friendRepository.GetFriendsById(userId,callback);
    },
}