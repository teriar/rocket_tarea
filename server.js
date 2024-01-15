const express = require('express')
const cors = require('cors');



class Server{

    constructor(){
        // iniciamos express
        this.app = express();
        this.app.use(cors());

        // puerto
        this.port= process.env.PORT;
        
        this.paths ={
            arboles:'/api/arboles',
            fotos: '/api/fotos',
            ubicaciones:'/api/ubicaciones',
            comentarios:'/api/commentarios'
           
        }

        
        // iniciamos midleware
        this.middlewares();

        // iniciamos las rutas
        this.routes();
    }
   
    
    middlewares(){
        //cors
        
       
        
        //Parseo y lectura del body
        this.app.use(express.json())
        //directorio publico
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use( this.paths.arboles, require('./routes/arboles'));
        this.app.use( this.paths.fotos, require('./routes/fotos'));
        this.app.use( this.paths.ubicaciones, require('./routes/ubicacion'));
        this.app.use( this.paths.comentarios, require('./routes/comentarios'));
        
    }

    // para verificar en que puerto esta corriendo la app
    listen(){
        this.app.listen(this.port,()=>{

            console.log('server corriendo', process.env.PORT )
        })
    }

}




module.exports= Server