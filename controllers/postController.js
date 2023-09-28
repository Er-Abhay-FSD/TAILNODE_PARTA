const Post = require('../models/post');

// Controller function to get all posts
const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    console.error('Error fetching all posts:', error);
    res.status(500).json({ error: 'An error occurred while fetching posts.' });
  }
};

// Controller function to get a post by ID
const getPostById = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Post.findById(id);
    if (!post) {
      return res.status(404).json({ error: 'Post not found.' });
    }
    res.json(post);
  } catch (error) {
    console.error('Error fetching post by ID:', error);
    res.status(500).json({ error: 'An error occurred while fetching the post.' });
  }
};

// Controller function to create a new post
const createPost = async (req, res) => {
  const { title, content, userId } = req.body;
  try {
    if (!title || !content || !userId) {
      return res.status(400).json({ error: 'Title, content, and userId are required fields.' });
    }

    const newPost = new Post({
      title,
      content,
      userId,
      // Add other post fields as needed
    });
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (error) {
    console.error('Error creating a new post:', error);
    res.status(500).json({ error: 'An error occurred while creating the post.' });
  }
};

// Controller function to update a post by ID
const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, content, userId } = req.body;
  try {
    if (!title || !content || !userId) {
      return res.status(400).json({ error: 'Title, content, and userId are required fields for updating.' });
    }

    const updatedPost = await Post.findByIdAndUpdate(id, {
      title,
      content,
      userId,
      // Add other post fields as needed
    });
    if (!updatedPost) {
      return res.status(404).json({ error: 'Post not found.' });
    }
    res.json(updatedPost);
  } catch (error) {
    console.error('Error updating the post:', error);
    res.status(500).json({ error: 'An error occurred while updating the post.' });
  }
};

// Controller function to delete a post by ID
const deletePost = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedPost = await Post.findByIdAndRemove(id);
    if (!deletedPost) {
      return res.status(404).json({ error: 'Post not found.' });
    }
    res.json(deletedPost);
  } catch (error) {
    console.error('Error deleting the post:', error);
    res.status(500).json({ error: 'An error occurred while deleting the post.' });
  }
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
};
