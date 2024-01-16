const { Router } = require('express')
const {comentarios} = require('../controllers/comentarios')
//inicializamos el router
const router = Router()


router.post('/:id',(comentarios))


module.exports = router