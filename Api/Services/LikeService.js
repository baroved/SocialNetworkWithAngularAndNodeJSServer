const likeRepository = require('../../Repository/LikeRepository');

module.exports = {
    GetLikes: (postId,callback) =>{
        return likeRepository.GetLikes(postId,callback);
    },

    AddLike: (newLike,callback) =>{
        return likeRepository.AddLike(newLike,callback);
    },
    CheckLikeExists: (newLike,callback) =>{
        return likeRepository.CheckLikeExists(newLike,callback);
    }
    
} 