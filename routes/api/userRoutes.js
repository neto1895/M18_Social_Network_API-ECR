const { User } = require('../../models');

const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createNewUser,
    updateUserById,
    removeUserById,
    addNewFriend,
    removeFriend,
} = require('../../Controllers/userController')



// router.get('/', async (req, res) => {
//     res.send('Komma kommosa =^.^=')
// })



// router.get('/test', async (rec, res) => {
    
//     try {
//         const allUsers = await User.find({})
//         res.json(allUsers);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// router.post('/testPost', async (req, res) => {
//     try {
//         const user = await User.create(req.body);
//         res.json(user);
//       } catch (err) {
//         res.status(500).json(err);
//       }
// })

// /api/user
router.route('/')
    .get(getAllUsers)
    .post(createNewUser)

// /api/user/
router.route('/:userId')
    .get(getUserById)
    .put(updateUserById)
    .delete(removeUserById)

// /api/
router.route('/:userId/friends/:friendId')
    .post(addNewFriend)
    .delete(removeFriend)

module.exports = router;