const connection = require('../config/connection');
const { Thought, User } = require('../models');

connection.once('open', async () => {
    console.log('Connected to the database.');
  
    // Create empty collections (or remove existing data)


    await User.deleteMany({});
    await Thought.deleteMany({});
    await Reaction.deleteMany({});
  
    console.log('Empty collections created.');
  
    process.exit(0);
  });
