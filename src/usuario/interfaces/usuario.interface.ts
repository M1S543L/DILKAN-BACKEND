import mongoose, { Document } from 'mongoose';

export interface Usuario extends Document{
    readonly nombreUsuario: string;
    readonly correoElectronico: string;
    readonly contrasena: string;
    readonly fotoPerfil: string;
    readonly plan: string | object;
}
 