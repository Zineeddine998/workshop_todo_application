import service from "./service.js";

export const getAllPosts = async (req, res, next) => {
    try {
        const posts = await service.findAllPosts();
        res.status(200).json({ posts: posts });
    } catch (err) {
        next(err);
    }
};

export const getPostById = async (req, res, next) => {
    try {
        const { id } = req.params;
        if (!id) {
            res.status(400).json({ error: 'No id provided' });
        }
        const post = await service.findPostById(id);
        res.status(200).json({ post: post });
    } catch (err) {
        next(err);
    }
};

export const addPost = async (req, res, next) => {
    try {
        const { title, description } = req.body;
        const newPost = await service.createPost(title, description);
        res.status(200).json({ post: newPost });
    } catch (err) {
        next(err);
    }
};

export const updatePost = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { title, description } = req.body;
        if (!id) {
            res.status(400).json({ error: 'No id provided' });
        }
        if (!title && !description) {
            res.status(400).json({ error: 'No title or description provided' });
        }
        const updatedPost = await service.updatePost(id, title, description);
        res.status(200).json({ post: updatedPost });
    } catch (err) {
        next(err);
    }
};

export const deletePost = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedPost = await service.deletePost(id);
        res.status(200).json({ post: deletedPost });
    } catch (err) {
        next(err);
    }
};

