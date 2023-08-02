const { User , Thought } = require('../models');

module.exports = {
    // GET
    async getAllThoughts(req, res) {
        try {
            const thought = await Thought.find({}) 
            res.json(thought);

        } catch (err){
            res.status(500).json(err);
        }
    },
    // POST
    async createNewThought(req, res) {
        try {
            const thought = await Thought.create(req.body);
            const updateUserById = await User.findOneAndUpdate(
                { _id: req.body.userId},
                { $push: { thoughts: thought._id}},
                {new: true}
            )

            if (!updateUserById) {
                return res.status(404).json({ message: 'No user with that ID'})
            }
            res.json(updateUserById);

        } catch (err){
            res.status(500).json(err);
        }
    },
    // GET
    async getThoughtById(req, res) {
        try {
            const thought = await Thought.findOne({ _id: req.params.thoughtId})
            .select('-__v');

            if (!thought) {
                return res.status(404).json({ message: 'No thought with that ID'})
            }
            
            res.json(thought);

        } catch (err){
            res.status(500).json(err);
        }
    },
    // PUT
    async updateThoughtById(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId},
                { $set: req.body},
                { new: true, runValidators: true}
            );

            if (!thought) {
                return res.status(404).json({ message: 'No thought with that ID'})
            }
            
            res.json(thought);

        } catch (err){
            res.status(500).json(err);
        }
    },
    // DELETE
    async removeThoughtById(req, res) {
        try {
            const thought = await Thought.findByIdAndDelete(
                { _id: req.params.thoughtId}
            );

            if (!thought) {
                return res.status(404).json({ message: 'No thought with that ID'})
            }
            
            res.json(thought);

        } catch (err){
            res.status(500).json(err);
        }
    },
    // POST
    async createReaction(req, res) {
        try {
            const reaction = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $addToSet: {reactions: req.body }},
                {runValidators: true, new: true }
            )
            
            res.json(reaction);

        } catch (err){
            res.status(500).json(err);
        }
    },
    // DELETE
    async removeReactionById(req, res) {
        try {
            const reaction = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId }, 
                { $pull: { reactions: {reactionId: req.params.reactionId}}}, // Only difference with createReaction is the $pull
                { new: true}
            );

            if (!reaction) {
                return res.status(404).json({ message: 'No reaction with that ID'})
            }

            res.json(reaction);

        } catch (err){
            res.status(500).json(err);
        }
    },

}