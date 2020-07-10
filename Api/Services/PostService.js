const postRepository = require('../../Repository/PostRepository');

module.exports = {
    GetPosts: (callback) =>{
        return postRepository.GetPosts(callback);
    },

    GetPostsByPublisher: (userName,callback) =>{
        return postRepository.GetPostsByPublisher(userName,callback);
    },
    
    GetPostsByRangeDate: (rangeDate,callback) =>{
        return postRepository.GetPostsByRangeDate(rangeDate,callback);
    }
    
} 