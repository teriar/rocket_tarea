const { Router } = require('express')
const {envioUbicaciones} = require('../controllers/ubicacion')
//inicializamos el router
const router = Router()


router.get('/:id',(envioUbicaciones))


module.exports = router