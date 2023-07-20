import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { MongooseModule } from '@nestjs/mongoose';



@Module({
  imports: [ UsuarioModule, MongooseModule.forRoot('mongodb+srv://M1S543L:DilanAndino1994@clusterdilkan.pll3f9l.mongodb.net/')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
