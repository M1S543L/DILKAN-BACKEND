export class CreateUsuarioDTO{
    readonly nombreUsuario: string;
    readonly correoElectronico: string;
    readonly contrasena: string;
    readonly fotoPerfil: string;
    readonly plan: object | string;
    readonly createdAt: Date;
}