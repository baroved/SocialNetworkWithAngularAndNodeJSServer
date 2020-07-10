const commentRepository = require('../../Repository/CommentRepository');

module.exports = {
    GetComments: (postId,callback) =>{
        return commentRepository.GetComments(postId,callback);
    },

    AddComment: (comment,callback) =>{
        return commentRepository.AddComment(comment,callback);
    }
    
} 