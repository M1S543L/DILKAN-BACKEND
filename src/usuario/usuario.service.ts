import { Injectable, UnauthorizedException } from '@nestjs/common';
import {Model} from 'mongoose'
import {InjectModel} from '@nestjs/mongoose'
import {Usuario} from './interfaces/usuario.interface'
import { CreateUsuarioDTO } from './dto/usuario.dto';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class UsuarioService {

    constructor(@InjectModel('Usuario') private usuarioModel: Model<Usuario>){}
    //metodo que crea un usuario
    async createUsuario(createUsuarioDTO: CreateUsuarioDTO): Promise<Usuario>{
        const usuario = new this.usuarioModel(createUsuarioDTO);
        return await usuario.save();
    }


    //metodo que obtiene todos los usuarios
    async getUsuarios(): Promise<Usuario[]>{ // Promise<Usuario[]> is the return type
        const usuarios = await this.usuarioModel.find();
        return usuarios;
    }

    //metodo que obtiene un usuario por su id
    async getUsuario(usuarioID: string): Promise<Usuario | null>{
        return this.usuarioModel.findById(usuarioID);
    }

    //metodo que obtiene un usuario por su correo electronico
    async findByEmail(correoElectronico: string): Promise<Usuario | null>{
        return this.usuarioModel.findOne({correoElectronico});
    }

    //metodo autentificacion de usuario
    async autentificacion(correoElectronico: string, contrasena: string): Promise<Usuario | null>{
        const usuario = await this.usuarioModel.findOne({correoElectronico});
        if(!usuario){
            throw new UnauthorizedException('Usuario no encontrado');
        }
        if(usuario.contrasena != contrasena){
            throw new UnauthorizedException('Contraseña incorrecta');
        }
        console.log("Autentificacion exitosa");
        return usuario;
    }

    generarToken(userID: string): string {
        const payload = { sub: userID };
        const secretKey = 'mi_secreto_super_secreto'; // Cambiar esto por una clave secreta segura en producción
    
        // Aquí se genera el token utilizando el método "sign" de jwt
        const token = jwt.sign(payload, secretKey, { expiresIn: '1h' }); // El token expirará después de 1 hora
    
        return token;
      }
    



}
