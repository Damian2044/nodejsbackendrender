import mongoose  from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const conexion=async(n)=>{
    try{
    await mongoose.connect(process.env.MONGODB_URI);
        console.log ("Conectado correctamente...!");
    }catch(e){
        console.log(e);
    }
}

