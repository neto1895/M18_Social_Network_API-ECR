const router = require('express').Router();

const {
    getAllThoughts,
    createNewThought,
    getThoughtById,
    updateThoughtById,
    removeThoughtById,
    createReaction,
    removeReactionById,
} = require('../../Controllers/thoughtController');

// /api/thoughts
router.route('/')
    .get(getAllThoughts)
    .post(createNewThought)

// /api/thoughts
router.route('/:thoughtId')
    .get(getThoughtById)
    .put(updateThoughtById)
    .delete(removeThoughtById)

// /api/thoughts
router.route('/:thoughtId/reactions')
    .post(createReaction)

// /api/thoughts
router.route('/:thoughtId/reactions/:reactionId')
    .delete(removeReactionById)

module.exports = router;