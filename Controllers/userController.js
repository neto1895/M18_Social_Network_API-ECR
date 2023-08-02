const { User, Thought } = require('../models');

module.exports = {
    // GET
    async getAllUsers(req, res) {
        try {
            const allUsers = await User.find({})
            .select('-__v')
            .populate({ path: 'thoughts', select: '-__v' })
            .populate({ path: 'friends',  select: '-__v' });
            res.json(allUsers);

        } catch (err) {
            res.status(500).json(err);
    }
    },
    // POST
    async createNewUser(req, res) {
        try {
            const user = await User.create(req.body);
            res.json( user);

      } catch (err) {
            res.status(500).json(err);
      }
    },
    // GET
    async getUserById(req, res) {
        try {
            const user = await User.findOne({ _id: req.params.userId })
            .select('-__v')
            .populate({ path: 'thoughts', select: '-__v' })
            .populate({ path: 'friends',  select: '-__v' });
            
            if (!user) {
                return res.status(404).json({ message: 'No user with that ID'})
            }
            
            res.json(user);

        } catch (err) {
            res.status(500).json(err);
        }
    },
    // PUT
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
    // DELETE
    async removeUserById(req, res) {
        try {
            const user = await User.findById(req.params.userId);

            if (!user) {
                return res.status(404).json({ message: 'No user with that ID' });
            }

            // Delete associated thoughts
            await Thought.deleteMany({ username: user.username });

            // Delete the user
            await User.findByIdAndDelete(req.params.userId);

            res.json({ message: 'User and associated thoughts deleted successfully' });
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // POST
    async addNewFriend(req, res) {
        try {
            const friend = await User.findByIdAndUpdate(
                { _id: req.params.userId}, 
                { $push: { friends: req.params.friendId}}, 
                { new: true, runValidators: true}
            );

            if (!friend) {
                return res.status(404).json({ message: 'No user with that ID'})
            }

            res.json(friend);

        } catch (err) {
            res.status(500).json(err);
        }
    },
    // DELETE
    async removeFriend(req, res) {
        try {
            const friend = await User.findByIdAndUpdate(
                {_id: req.params.userId}, 
                {$pull: { friends: req.params.friendId}}, // Only difference with addNewFriend is the $pull
                {new: true, runValidators: true}
            );

            if (!friend) {
                return res.status(404).json({ message: 'No user with that ID'})
            }

            res.json(friend);

        } catch (err) {
            res.status(500).json(err);
        }
    },
}

