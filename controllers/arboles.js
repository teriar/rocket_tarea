const {response} = require('express')
const {conectClient} = require('../database/config')

const envioArboles = async (req,res)=>{

   
   
   const response = await conectClient("select * from arboles")
   
   
   res.status(200).json({response})
   return
}


module.exports={envioArboles}