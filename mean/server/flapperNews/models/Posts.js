var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
    title: String,
    link: String,
    upvotes: {
        type: Number,
        default: 0
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }]
});

PostSchema.methods.upvote = upvote;

mongoose.model('Post', PostSchema);

function upvote(cb) {
    this.upvotes += 1;
    this.save(cb);
}
