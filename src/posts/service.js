import db from '../db.js';
import { nanoid } from "nanoid";

const findAllPosts = () => {
    return db.chain.get('posts').value();
}

const findPostById = async (id) => {
    const post = db.chain.get('posts').find({ id: id }).value();
    if (!post) {
        throw new Error(`Post with id ${id} not found`);
    }
    return post;
}

const createPost = async (title, description) => {
    const newPost = {
        id: nanoid(),
        title: title,
        description: description,
    }
    db.data.posts.push(newPost);
    await db.write();
    return newPost;
}

const updatePost = async (id, title, description) => {
    let post = db.chain.get('posts').find({ id: id }).value();
    if (!post) {
        throw new Error(`Post with id ${id} not found`);
    }
    post = db.chain.get('posts').find({ id: id })
        .assign({ title: title, description: description })
        .value();
    return post;
}

const deletePost = async (id) => {
    const post = db.chain.get('posts').find({ id: id }).value();
    if (!post) {
        throw new Error(`Post with id ${id} not found`);
    }
    const deletedPost = db.chain.get('posts').remove({ id: id }).value();
    await db.write();
    return deletedPost;
}

export default {
    findAllPosts,
    findPostById,
    createPost,
    updatePost,
    deletePost,
}