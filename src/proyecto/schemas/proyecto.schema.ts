import mongoose, { Schema } from "mongoose";

export const proyectoSchema = new Schema( {
    nombre: {
        type: String,
    required: true,},
    codigoHtml: {
        type: Schema.Types.Mixed,
    required: true,},
    codigoCss: {
        type: Schema.Types.Mixed,
    required: true,},
    codigoJs: {
        type: Schema.Types.Mixed,
    required: true,},
    carpeta: {
        type: Schema.Types.ObjectId,
    required: true,},
    usuario: {
        type: Schema.Types.ObjectId,
    required: true,},
    

} );