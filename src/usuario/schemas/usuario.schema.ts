import { Prop } from "@nestjs/mongoose";
import mongoose, { Schema } from "mongoose";

export const usuarioSchema = new Schema( {
  nombreUsuario: {
    type: String,
    required: true,
  },
  correoElectronico: {
    type: String,
    required: true,
    unique: true,
  },
  contrasena: {
    type: String,
    required: true,
  },
  fotoPerfil: {
    type: String,
    required: true,
  },
  plan: {
    type: Schema.Types.Mixed, // Usamos el tipo Mixed para permitir tanto string como object
    required: true,
  },
  
});


