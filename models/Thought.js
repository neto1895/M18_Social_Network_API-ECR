const { Schema, model, Types } = require('mongoose');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (timestamp) => {
                return new Date(timestamp).toISOString();
            },
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema],
    }
);

const Thought = model ('user', thoughtSchema);

module.exports = Thought;