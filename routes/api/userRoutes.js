const router = require('express').Router();

const {
    getAllUsers   ,
    getUserById   ,
    createNewUser ,
    updateUserById,
    removeUserById,
    addNewFriend  ,
    removeFriend  ,
} = require('../../Controllers/userController')

// /api/users
router.route('/')
    .get(getAllUsers)
    .post(createNewUser)

// /api/users
router.route('/:userId')
    .get(getUserById)
    .put(updateUserById)
    .delete(removeUserById)

// /api/users
router.route('/:userId/friends/:friendId')
    .post(addNewFriend)
    .delete(removeFriend)

module.exports = router;