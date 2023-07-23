const connection = require('../config/connection');
const { Reaction, Thought, User } = require('../models');

connection.once('open', async () => {
    console.log('Connected to the database.');
  
    // Create empty collections (or remove existing data)
    await Reaction.deleteMany({});
    await Thought.deleteMany({});
    await User.deleteMany({});
  
    console.log('Empty collections created.');
  
    process.exit(0);
  });
