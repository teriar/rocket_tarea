const {response} = require('express')
const {conectClient} = require('../database/config')

const envioFotos = async (req,res)=>{

    const {id} =req.params;
   
   if(!id){
    res.status(400).json({
        msg: 'no existe id'
    })
    return
   }
   
   const response = await conectClient(`select * from fotos where arbol_id = ${id}`)
   
   
   res.status(200).json({response})
   return
}


module.exports={envioFotos}