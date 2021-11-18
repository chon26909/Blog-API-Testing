const Post = require("../models/Post.model");

const getAllPost = async (req, res) => {

    try {
        const posts = await Post.find();
        res.status(200).json(posts);

    } catch (error) {
        console.log("get posts error ", error);
        res.status(401).json({ message: "not found in database" });
    }
}

const getPostById = async (req, res) => {
    const { id } = req.params;
    try {
        const post = await Post.findById(id);
        return res.status(200).json(post);
    } catch (error) {
        console.log("error get post id ", error)
    }
}

const searchPostByText = async (req, res) => {
    let { text } = req.query;
    text = text.replace(/\s/g,"|")
    console.log("query ",new RegExp(text))

    try {
        const posts = await Post.find({ title: { $regex: new RegExp(text) } });
        res.status(200).json(posts);

    } catch (error) {
        console.log("get posts error ", error);
        res.status(401).json({ message: "not found in database" });
    }
}

const createPost = async (req, res) => {

    const { title, title_image, category, content } = req.body;

    //validate input
    if (!(title && title_image && category && content)) {
        return res.status(400).json({ message: "data invalid" })
    }

    try {
        const data = {
            title: title,
            title_image: title_image,
            category: category,
            content: content,
            author: "chon",
            date_create: new Date(),
            date_update: new Date()
        }

        const data_post = await Post.create(data);

        return res.status(200).json({ message: "create post success", data: data_post })

    } catch (error) {
        console.log("create post error", error);
        return res.status(501).json({ message: "server error" })
    }
}

const deletePost = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await Post.findByIdAndDelete(id);
        if(!data) {
            res.status(400).json({ message: "not found post id " + id})
        }
        else {
            res.status(200).json({ message: "delete post success"})
        }
     
    } catch (error) {
        console.log("error ",error)
    }   
}

module.exports = {
    getAllPost,
    createPost,
    deletePost,
    getPostById,
    searchPostByText
}