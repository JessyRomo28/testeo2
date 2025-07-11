import { Schema, modelo } from "mongoose";

const Esquemapalabtra = new Schema({
    name:string,
    edad:number
})


export const modelo = new modelo("palabras", Esquemapalabras)