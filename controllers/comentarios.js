const {response} = require('express')
const {conectClient} = require('../database/config')

const envioFotos = async (req,res)=>{
    const postulante_id = 254
    const {id} =req.params;
    const {comentario} = req.body
   
   if(!id){
    res.status(400).json({
        msg: 'no existe id'
    })
    return
   }
   
   const response = await conectClient(`insert into comentarios (arbol_id,postulante_id,comentario) values (${id},${postulante_id},${comentario}) `)
   
   
   res.status(200).json({response})
   return
}


module.exports={envioFotos}