const Post = require("../models/Post.model");

const getAllPost = async (req, res) => {

    try {
        const posts = await Post.find();
        res.status(200).json(posts);

    } catch (error) {
        console("get posts error ", error);
        res.status(401).json({ message: "not found in database" });
    }
}

const createPost = async (req, res) => {

    const { title, title_image, category, content } = req.body;

    //validate input
    if (!(title && title_image && category && content)) {
        return res.status(401).json({ message: "data invalid" })
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

        await Post.create(data);

        return res.status(200).json({ message: "create post success" })

    } catch (error) {
        console.log("create post error", error);
        return res.status(501).json({ message: "server error" })
    }
}

module.exports = {
    getAllPost,
    createPost
}