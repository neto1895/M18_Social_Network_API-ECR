const router = require('express').Router();
const reactionRoutes = require('./reactionRoutes');
const thoughtRoutes = require('./thoughtRoutes');
const userRoutes = require('./userRoutes');

router.use('/reaction', reactionRoutes);
router.use('/thought', thoughtRoutes);
router.use('/users', userRoutes);

module.exports = router;