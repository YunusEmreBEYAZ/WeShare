import Post from "../models/Post.js";
import User from "../models/User.js";

//CREATE

export const createPost = async (req, res) => {
    try {
        const { userId, description, picturePath } = req.params;
        const user = await User.findOne(userId)
    } catch (err) {
        res.status(409).json({ message: err.message })
    }
}