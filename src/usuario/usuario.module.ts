import { Module } from '@nestjs/common';
import { UsuarioController } from './usuario.controller';
import { UsuarioService } from './usuario.service';
import { MongooseModule } from '@nestjs/mongoose';
import { usuarioSchema } from './schemas/usuario.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'Usuario', schema: usuarioSchema} // name: 'Usuario' is the name of the model, schema: usuarioSchema is the schema imported from src\usuario\schemas\usuario.schema.ts
    ])
  ],
  controllers: [UsuarioController],
  providers: [UsuarioService]
})
export class UsuarioModule {}
