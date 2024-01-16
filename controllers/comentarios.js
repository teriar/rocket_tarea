const {response} = require('express')

const {conectComentario} = require('../database/comentario.config')

const comentarios = async (req,res)=>{
    const postulante_id = 971254324678
    const {id} =req.params;
    const comentario = req.body.comentario
    console.log(postulante_id,id,comentario)
   if(!id){
    res.status(400).json({
        msg: 'no existe id'
    })
    return
   }
   
   const values=[id,postulante_id,comentario]
   const response = await conectComentario(`insert into comentarios (arbol_id,postulante_id,comentario) values ($1,$2,$3)`,values)
   
   
   res.status(200).json({response})
   return
}


module.exports={comentarios}