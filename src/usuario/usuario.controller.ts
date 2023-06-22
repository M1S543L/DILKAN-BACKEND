import { Controller , Get, Post, Put, Delete, Res, HttpStatus, Body } from '@nestjs/common';
import { CreateUsuarioDTO } from './dto/usuario.dto';

@Controller('usuario')
export class UsuarioController {

    @Post('crear')
    crearUsuario(@Res() res, @Body() createUsuarioDTO: CreateUsuarioDTO){
        //console.log(createUsuarioDTO);
        return res.status(HttpStatus.OK).json({
            mensaje: 'Recibido'})
    }

}
