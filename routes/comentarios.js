const { Router } = require('express')
const {envioFotos} = require('../controllers/fotos')
//inicializamos el router
const router = Router()


router.get('/:id',(envioFotos))


module.exports = router