const {response} = require('express')
const {conectClient} = require('../database/config')

const envioUbicaciones = async (req,res)=>{

    const {id} =req.params;
   
   
   if(!id){
    res.status(400).json({
        msg: 'no existe id'
    })
    return
   }
   
   const response = await conectClient(`select * from ubicaciones where ubicacion_id = ${id}`)
   
   
   res.status(200).json({response})
   return
}


module.exports={envioUbicaciones}