import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import corse from "cors";
import { test } from "./backend/contollers/controller.js";

dotenv.config
mongoose.conect(process.env.urlbd)
.then(()=>{
    console.log("funciona la conexión de la base")
})
.catch(()=>{
    console.log("no funciona la conexión a la base de datos")
})

const app = express();
app.usa(corse);
app.liste(4000, ()=>{
    console.long("Escuchando al servidor")
})

test