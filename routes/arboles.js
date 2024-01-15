const { Router } = require('express')
const {envioArboles} = require('../controllers/arboles')
//inicializamos el router
const router = Router()


router.get('/',(envioArboles))


module.exports = router