import { Controller , Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException } from '@nestjs/common';
import { CreateUsuarioDTO } from './dto/usuario.dto';
import { UsuarioService } from './usuario.service';
import { Usuario } from './interfaces/usuario.interface';
@Controller('usuarios')
export class UsuarioController {

    constructor(private readonly usuarioService: UsuarioService){
    //crear un nuevo usuario  
    }
    @Post('/crear')
    async crearUsuario(@Res() res, @Body() createUsuarioDTO: CreateUsuarioDTO){
        
        const usuario = await this.usuarioService.createUsuario(createUsuarioDTO);

        return res.status(HttpStatus.OK).json({
            mensaje: 'Usuario creado satisfactoriamente',
            usuario: usuario
        })
    }
    //listar todos los usuarios
    @Get('/listar')
    async getUsuarios(@Res() res){ 
        const usuarios = await this.usuarioService.getUsuarios();
        return res.status(HttpStatus.OK).json({
            usuarios: usuarios
        })
    }
    
    //Metodo para obtener un usuario por su id
    @Get('/listar/:id')
    async findById(@Param('id') id: string): Promise<Usuario | null> {
        return this.usuarioService.getUsuario(id);
      }
    
    //Metodo para obtener un usuario por su correo electronico
    @Get('/listar/email/:correo')
    async findByEmail(@Param('correo') correo: string): Promise<Usuario | null> {
        return this.usuarioService.findByEmail(correo);
    }

    //Metodo para autentificar un usuario
    @Get('/login/:correo/:contrasena')
    async autentificar(@Param('correo') correo: string, @Param('contrasena') contrasena: string): Promise<Usuario | null> {
        return this.usuarioService.autentificacion(correo, contrasena);
    }

    //metodo para hacer login de un usuario con un jwt
    @Post('/login')
    async login(@Res() res, @Body() createUsuarioDTO: CreateUsuarioDTO){
        // Llamar al servicio para autenticar al usuario
    const usuario = await this.usuarioService.autentificacion(
        createUsuarioDTO.correoElectronico,
        createUsuarioDTO.contrasena,
      );
  
      // Verificar si el usuario existe en la base de datos
      if (!usuario) {
        throw new NotFoundException('Usuario no encontrado');
      }
  
      // Si el usuario existe, generar el token JWT
      const token = this.usuarioService.generarToken(usuario.id);
  
      // Devolver la respuesta al cliente
      return res.status(HttpStatus.OK).json({
        mensaje: 'Usuario autenticado correctamente',
        usuario: usuario,
        token: token,
      });
    } 

    //metodo para eliminar un usuario
    @Delete('/eliminar/:id')
    async deleteUsuario(@Res() res, @Param('id') id: string){
        const usuario = await this.usuarioService.deleteUsuario(id);
        if(!usuario){
            throw new NotFoundException('Usuario no encontrado');
        }
        return res.status(HttpStatus.OK).json({
            mensaje: 'Usuario eliminado satisfactoriamente',
            usuario: usuario
        })
    }

    //metodo para actualizar un usuario
    @Put('/actualizar/:id')
    async updateUsuario(@Res() res, @Param('id') id: string, @Body() createUsuarioDTO){
        const usuario = await this.usuarioService.updateUsuario(id, createUsuarioDTO);
        if(!usuario){
            throw new NotFoundException('Usuario no encontrado');
        }
        return res.status(HttpStatus.OK).json({
            mensaje: 'Usuario actualizado satisfactoriamente',
            usuario: usuario
        })
    }
    

}
