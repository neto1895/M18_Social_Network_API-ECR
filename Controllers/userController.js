const { ObjectId } = require('mongoose').Types;

const { User } = require('../models');


module.exports = {

    async getAllUsers(req, res) {
        try {
            const allUsers = await User.find({})
            res.json(allUsers);
        } catch (err) {
            res.status(500).json(err);
    }
    },

    async createNewUser(req, res) {
        try {
            const user = await User.create(req.body);
            res.json(user);
      } catch (err) {
            res.status(500).json(err);
      }
    },

    async getUserById(req, res) {
        try {
            const user = await User.findOne({ _id: req.params.userId })

            .select('-__v')
            .populate({
                path: 'thoughts',
                select: '-__v'
            })
            .populate({
                path: 'friends',
                select: '-__v'
            });
            if (!user) {
                return res.status(404).json({ message: 'No user with that ID'})
            }
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async updateUserById(req, res) {
        try {
            const user = await User.findByIdAndUpdate(
                { _id: req.params.userId},
                { $set: req.body },
            );
            if (!user) {
                return res.status(404).json({ message: 'No user with that ID'})
            }
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async removeUserById(req, res) {
        try {
            const user = await User.findByIdAndDelete(
                { _id: req.params.userId}
            );
            if (!user) {
                return res.status(404).json({ message: 'No user with that ID'})
            }
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async addNewFriend(req, res) {
        try {
            res.send("4")
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async removeFriend(req, res) {
        try {
            res.send("5")
        } catch (err) {
            res.status(500).json(err);
        }
    },
}

