import { Injectable , UnauthorizedException } from '@nestjs/common';
import {Model} from 'mongoose'
import {InjectModel} from '@nestjs/mongoose'
import {Proyecto} from './interfaces/proyecto.interface'
import { CreateProyectoDTO } from './dto/proyecto.dto';
@Injectable()
export class ProyectoService {

    constructor(@InjectModel('Proyecto') private proyectoModel: Model<Proyecto>){}

//metodo que crea un proyecto
    async createProyecto(createProyectoDTO: CreateProyectoDTO): Promise<Proyecto>{
        const proyecto = new this.proyectoModel(createProyectoDTO);
        return await proyecto.save();
    }

//metodo que obtiene todos los proyectos
    async getProyectos(): Promise<Proyecto[]>{ // Promise<Proyecto[]> is the return type
        const proyectos = await this.proyectoModel.find();
        return proyectos;}

//metodo que obtiene un proyecto por su id
    async getProyecto(proyectoID: string): Promise<Proyecto | null>{
        return this.proyectoModel.findById(proyectoID);
    }

//metodo que obtiene un proyecto por su nombre
    async findByNombre(nombre: string): Promise<Proyecto | null>{
        return this.proyectoModel.findOne({nombre});
    }

//metodo que obtiene todos los proyectos de un usuario
    async getProyectosUsuario(usuario: string): Promise<Proyecto[]>{ // Promise<Proyecto[]> is the return type
        const proyectos = await this.proyectoModel.find({usuario});
        return proyectos;}

//metodo que obtiene todos los proyectos de una colaborador
    async getProyectosColaborador(colaborador: string): Promise<Proyecto[]>{ // Promise<Proyecto[]> is the return type

        const proyectos = await this.proyectoModel.find({colaborador});
        return proyectos;}

//metodo para eliminar un proyecto
    async deleteProyecto(proyectoID: string): Promise<Proyecto>{
        return await this.proyectoModel.findByIdAndDelete(proyectoID);
    }

//metodo para actualizar un proyecto
    async updateProyecto(proyectoID: string, createProyectoDTO: CreateProyectoDTO): Promise<Proyecto>{
        return await this.proyectoModel.findByIdAndUpdate(proyectoID, createProyectoDTO, {new: true});
    }

//metodo para agregar colaborador a un proyecto
    async addColaborador(proyectoID: string, colaborador: string): Promise<Proyecto>{
        return await this.proyectoModel.findByIdAndUpdate(proyectoID, { $push: { colaboradores: colaborador } }, {new: true});
    }

    

}
