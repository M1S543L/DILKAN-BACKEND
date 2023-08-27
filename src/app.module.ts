import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ProyectoModule } from './proyecto/proyecto.module';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [ ConfigModule.forRoot(), UsuarioModule, MongooseModule.forRoot(
    'mongodb+srv://M1S543L:DilanAndino1994@clusterdilkan.pll3f9l.mongodb.net/'),
  ProyectoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
