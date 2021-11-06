const Post = require("../models/Post.model");

const getAllPost = async (req, res) => {

    try {
        const posts = await Post.find();
        res.status(200).json(posts);

    } catch (error) {
        console("get posts error ",error);
        res.status(401).json({message: "not found in database"});
    }

}

module.exports = {
    getAllPost
}