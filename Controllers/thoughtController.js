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
            res.json(thought);

        } catch (err){
            res.status(500).json(err);
        }
    },
    // GET
    async getThoughtById(req, res) {
        try {

            
            res.json(thought);

        } catch (err){
            res.status(500).json(err);
        }
    },
    // PUT
    async updateThoughtById(req, res) {
        try {

            
            res.json(thought);

        } catch (err){
            res.status(500).json(err);
        }
    },
    // DELETE
    async removeThoughtById(req, res) {
        try {

            
            res.json(thought);

        } catch (err){
            res.status(500).json(err);
        }
    },
    // POST
    async createReaction(req, res) {
        try {

            
            res.json(thought);

        } catch (err){
            res.status(500).json(err);
        }
    },
    // DELETE
    async removeReactionById(req, res) {
        try {

            
            res.json(thought);

        } catch (err){
            res.status(500).json(err);
        }
    },

}