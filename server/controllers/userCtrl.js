const Users = require('../models/UserModel')

const userCtrl = {
    searchUser: async(req, res) => {
        try {
            const users = await Users.find({username: {$regex: req.query.username}})
            .limit(10).select("fullname username avatar")

            res.json({users})
        } catch (err) {
             return res.status(500).json({msg: err.message})}

        },

    getUser: async(req, res) => {
        try {
            const user = await Users.findById(req.params.id).select('-password')
            if(!user) return res.status(400).json({msg: 'This user does not exist!'})
            
            res.json({user});

        }catch (err) {
            return res.status(500).json({msg: err.message})}

       },
       
    updateUser: async(req, res) => {
        try {
            const { fullname, mobile, address, website, story, gender, avatar } = req.body;
            if(!fullname) return res.status(400).json({msg: 'please add your fullname!'})

            await Users.findByIdAndUpdate({_id: req.user._id}, {
                fullname, mobile, address, website, story, gender, avatar
            })

            res.json({msg: 'Updated succesfully!'})
        } catch (err) {
            return res.status(500).json({msg: err.message})}
        }
    }

    
    
    

module.exports = userCtrl;