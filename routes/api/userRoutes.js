const { User } = require('../../models');

const router = require('express').Router();

router.get('/', async (req, res) => {
    res.send('Komma kommosa =^.^=')
})



// router.get('/test', async (rec, res) => {
    
//     try {
//         const allUsers = await User.find({})
//         res.json(allUsers);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

router.post('/testPost', async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.json(user);
      } catch (err) {
        res.status(500).json(err);
      }
})

module.exports = router;