import { Module } from '@nestjs/common';
import { ProyectoController } from './proyecto.controller';
import { ProyectoService } from './proyecto.service';
import { proyectoSchema } from './schemas/proyecto.schema';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [MongooseModule.forFeature([
    {name : 'Proyecto', schema: proyectoSchema}
  ]),
],
  controllers: [ProyectoController],
  providers: [ProyectoService]
})
export class ProyectoModule {}
 