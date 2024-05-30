import { Injectable } from '@nestjs/common';
import { UsuarioDTO } from '../dto/usuarioDTO';

@Injectable()
export class UsuarioService {
  create(createUsuarioDto: UsuarioDTO) {
    return new UsuarioDTO;
  }

  findAll() {
    return [new UsuarioDTO];
  }

  findOne(id: number) {
    return new UsuarioDTO;
  }

  update(id: number, updateUsuarioDto: UsuarioDTO) {
    return new UsuarioDTO;
  }

  remove(id: number) {
    return `This action removes a #${id} usuario`;
  }

  buscaPorEmail(email: string) {
    return new UsuarioDTO;
  }
}
