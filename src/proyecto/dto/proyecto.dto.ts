export class CreateProyectoDTO{
 /*
 Campos:
_id: ID único del proyecto.
nombre: Nombre del proyecto.
codigoHtml: Código HTML del proyecto.
codigoCss: Código CSS del proyecto.
codigoJs: Código JavaScript del proyecto.
carpeta: ID de la carpeta a la que pertenece el proyecto.
usuario: ID del usuario propietario del proyecto.
 */

readonly nombre: string;
readonly codigoHtml: object|string;
readonly codigoCss: object|string;
readonly codigoJs: object|string;
readonly colaboradores: object|string;
readonly usuario: object|string;

}