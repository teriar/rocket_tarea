const {Client} = require('pg')


const conectComentario= async (query,values)=>{

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

      let insertManual = `insert into postulantes(postulante_id,nombre,apellido,ciudad,linkedin,guthub_tarea, telefono,otras_referencias) values($1,$2,$3,$4,$5,$6,$7,$8)`;
      
      //const values= ['971254324678','felipe','gonzalez','mulchen','https://www.linkedin.com/in/felipe-gonzalez-urriola-desarrollador-fullstack/','https://github.com/teriar/rocket_tarea','56972978869','https://statuesque-malasada-f01bd6.netlify.app']
     
      await client.query("SET search_path TO 'roket'")
        const res = await client.query(query,values)
        client.end();
        
        return res.rows
     
   

    
}


module.exports={
    conectComentario
}