let mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    gu_id: String,
    bookmarks: {
        job_id: String,
        job_url: String
    }
})

const User = mongoose.model('UserSchema', userSchema);

module.exports = User; 