import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException } from '@nestjs/common';
import { ProyectoService } from './proyecto.service';
import { Proyecto } from './interfaces/proyecto.interface';

@Controller('proyectos')
export class ProyectoController {

    constructor(private readonly proyectoService: ProyectoService){}

    //crear un nuevo proyecto
    @Post('/crear')
    async crearProyecto(@Res() res, @Body() createProyectoDTO){
        
        const proyecto = await this.proyectoService.createProyecto(createProyectoDTO);

        return res.status(HttpStatus.OK).json({
            mensaje: 'Proyecto creado satisfactoriamente',
            proyecto: proyecto
        })
    }

    //listar todos los proyectos
    @Get('/listar')
    async getProyectos(@Res() res){ 
        const proyectos = await this.proyectoService.getProyectos();
        return res.status(HttpStatus.OK).json({
            proyectos: proyectos
        })
    }

    //Metodo para obtener un proyecto por su id
    @Get('/listar/:id')
    async findById(@Param('id') id: string): Promise<Proyecto | null> {
        return this.proyectoService.getProyecto(id);
      }
    
    //Metodo para obtener un proyecto por su nombre
    @Get('/listar/proyecto/:nombre')
    async findByNombre(@Param('nombre') nombre: string): Promise<Proyecto | null> {
        return this.proyectoService.findByNombre(nombre);
    }

    //Metodo para obtener todos los proyectos de un usuario
    @Get('/listar/proyectos/:usuario')
    async getProyectosUsuario(@Param('usuario') usuario: string): Promise<Proyecto[] | null> {
        return this.proyectoService.getProyectosUsuario(usuario);
    }

    //Metodo para obtener todos los proyectos de una colaborador
    @Get('/listar/proyectos/colaborador/:colaborador')
    async getProyectoscolaborador(@Param('colaborador') colaborador: string): Promise<Proyecto[] | null> {
        return this.proyectoService.getProyectosColaborador(colaborador);
    }

    //metodo para eliminar un proyecto
    @Delete('/eliminar/:id')
    async deleteProyecto(@Res() res, @Param('id') id: string){
        const proyecto = await this.proyectoService.deleteProyecto(id);
        if(!proyecto){
            throw new NotFoundException('Proyecto no encontrado');
        }
        return res.status(HttpStatus.OK).json({
            mensaje: 'Proyecto eliminado satisfactoriamente',
            proyecto: proyecto
        })
    }

    //metodo para actualizar un proyecto
    @Put('/actualizar/:id')
    async updateProyecto(@Res() res, @Param('id') id: string, @Body() createProyectoDTO){
        const proyecto = await this.proyectoService.updateProyecto(id, createProyectoDTO);
        if(!proyecto){
            throw new NotFoundException('Proyecto no encontrado');
        }
        return res.status(HttpStatus.OK).json({
            mensaje: 'Proyecto actualizado satisfactoriamente',
            proyecto: proyecto
        })
    }
    
    //metodo para agregar colaborador a un proyecto
    @Put('/agregarColaborador/:id')
    async addColaborador(@Res() res, @Param('id') id: string, @Body() createProyectoDTO){
        const proyecto = await this.proyectoService.addColaborador(id, createProyectoDTO);
        if(!proyecto){
            throw new NotFoundException('Proyecto no encontrado');
        }
        return res.status(HttpStatus.OK).json({
            mensaje: 'Colaborador agregado satisfactoriamente',
            proyecto: proyecto
        })
    }


}
