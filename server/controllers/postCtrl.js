const Posts = require('../models/postModel')

const postCtrl = {
    createPost: async(req, res) => {
        try {
            const { content, images } = req.body;

            if(images.length === 0){
                return res.status(400).json({msg: "Please add a Photo!"})
            }

            const newPost = new Posts({
                content, images, user: req.user._id
            })

            await newPost.save();
            res.json({
                msg: 'Created Post!',
                newPost: {
                    ...newPost._doc,
                    user: req.user
                }
            })
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
}

module.exports = postCtrl