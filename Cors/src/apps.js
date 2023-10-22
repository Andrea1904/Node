import express from "express";
import cors from "cors"


const app= express()
const port = 8080

app.use(express.json())


const whitelist=[
    ' http://localhost:8080',
    'lapagina.co'
]

const options ={
    origin: (origin,callback)=>{
        if(whitelist.includes(origin)){
            callback(null,true)
        }else{
            callback( new Error('No esta permitido ese origen'))
        }
    }
}

app.use(cors()) // cualquier dominio para un aPI publica si

app.use(cors(options)) // cuando se quiere restringir el acceso

app.listen(port, console.log("server arriba"))