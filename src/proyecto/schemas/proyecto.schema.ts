import mongoose, { Schema } from "mongoose";

export const proyectoSchema = new Schema( {
    nombre: {
        type: String,
    required: true,},
    codigoHtml: {
        type: Schema.Types.Mixed,
    required: false,},
    codigoCss: {
        type: Schema.Types.Mixed,
    required: false,},
    codigoJs: {
        type: Schema.Types.Mixed,
    required: false,},
    colaboradores: {
        type: Schema.Types.Mixed,
    required: false,},
    usuario: {
        type: Schema.Types.String,
    required: false,},
    

} );