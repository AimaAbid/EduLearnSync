var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var commentSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'user', required: true },
    postId: { type: Schema.Types.ObjectId, ref: 'post', required: true },
    commentBody:String,
    date:String
    
});

var user = mongoose.model("Comment", commentSchema);

module.exports = user;
