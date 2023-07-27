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
            res.send("1")
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async updateUserById(req, res) {
        try {
            res.send("2")
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async removeUserById(req, res) {
        try {
            res.send("3")
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

