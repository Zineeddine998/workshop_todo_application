import express from 'express';
import { getAllPosts, getPostById, updatePost, deletePost, addPost } from './controller.js';

const router = express.Router();

// Get all posts
router.get('/', getAllPosts);

// Get post by id
router.get('/:id', getPostById);

// Add a post
router.post('/', addPost);

// Update a post by id
router.put('/:id', updatePost);


// Delete a post by id
router.delete('/:id', deletePost);

export default router;