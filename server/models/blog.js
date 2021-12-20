const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  blogTitle: {
    type: String,
    unique: true,
    trim: true,
    required: true,
  },
  blogContent: {
    type: String,
    trim: true,
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
