const {Client} = require('pg')


const conectClient= async (query)=>{

const client = new Client({
    user: 'roketuser',
    host: 'tarearoket.cv2quftjeoly.us-east-1.rds.amazonaws.com',
    password: 'roket2024',
    database: 'postgres',
    ssl:{
        rejectUnauthorized:false,
    },
    

    
});
    try{
    await client.connect();

    console.log("conexion establecida");
    }
    catch(error){
        console.log("no se pudo conectar a la base de datos",error)
    }

     
     
        await client.query("SET search_path TO 'roket'")
        const res = await client.query(query)
        client.end();
        
        return res.rows
     
   

    
}


module.exports={
conectClient
}