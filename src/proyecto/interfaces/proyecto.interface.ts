import mongoose, { Document } from 'mongoose';

export interface Proyecto extends Document{
    readonly nombre: string;
    readonly codigoHtml: object|string;
    readonly codigoCss: object|string;
    readonly codigoJs: object|string;
    readonly carpeta: object|string;
    readonly usuario: object|string;
    
}