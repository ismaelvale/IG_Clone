const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    caption: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    added: { type: Date, default: Date.now },
    image: { type: String, required: true },
    comments: [{body:"string", by: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}}],
    likes: [{ type: Number }]
});

MessageSchema.virtual('url').get(function () {
    return `/messages/${this.id}`;
});

module.exports = mongoose.model('Messages', MessageSchema);