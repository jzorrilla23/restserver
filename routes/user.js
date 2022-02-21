const { Router } = require('express');
const { usersGet, usersPut, usersPost, usersDelete,  } = require('../controllers/user')

const router = Router();

router.get('/', usersGet)

router.put('/', usersPut)

router.post('/', usersPost)

router.delete('/:id', usersDelete)

module.exports = router;