import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { ClienteEntity } from '../Clientes/entity/cliente.entity';
import { EntregadoresEntity } from '../Entregadores/entity/entregadores.entity';
import { ListarClienteService } from '../Clientes/service/listaClientes';
import { ListarEntregadoresService } from '../Entregadores/service/listaEntregadores';

export interface UsuarioPayload {
  id: string;
  nomeUsuario: string;
  email: string;
  tipoUsuario: string[];
}
export enum TipoUsuario {
  CLIENTE = 1,
  ENTREGADOR = 2
}
interface usuario{
  id: string
  nomeUsuario: string
  email: string
  senha: string
  tipoUsuario: string[]
}

@Injectable()
export class AutenticacaoService {
  constructor(
    private jwtService: JwtService,
    private readonly listaCliente: ListarClienteService,
    private readonly listaEntregadores: ListarEntregadoresService,
  ) {}

  async login(email: string, senhaInserida: string) {
    const usuario = await this.validaEmailLogin(email);
    let usuarioFoiAutenticado: boolean = false;
    if(usuario){
      usuarioFoiAutenticado = await bcrypt.compare(senhaInserida, usuario.senha);
    }

    if (!usuarioFoiAutenticado) {
      throw new UnauthorizedException('Email / Senha incorreto.');
    }

    const payload: UsuarioPayload = {
      id: usuario!.id,
      nomeUsuario: usuario!.nomeUsuario,
      email: usuario!.email,
      tipoUsuario: usuario!.tipoUsuario,
    };
    
    return {
      token_acesso: await this.jwtService.signAsync(payload),
    };
  }

  async validaEmailLogin(email: string) {
    const clientes: ClienteEntity | null = await this.listaCliente.listarClienteEmail(email);
    const entregadores: EntregadoresEntity | null = await this.listaEntregadores.listarEntregadoresEmail(email);

    let usuario: usuario = {
        id: '',
        nomeUsuario: '',
        senha: '',
        email: '',
        tipoUsuario: []
    };

    // Se clientes existir, atribui valores e adiciona 'CLIENTE' ao tipoUsuario
    if (clientes) {
        usuario.id = clientes.id;
        usuario.nomeUsuario = clientes.nome;
        usuario.senha = clientes.senha;
        usuario.email = clientes.email;
        usuario.tipoUsuario.push(TipoUsuario.CLIENTE.toString());
    }

    // Se entregadores existir, atribui valores e adiciona 'ENTREGADOR' ao tipoUsuario
    if (entregadores) {
        usuario.id = entregadores.id;
        usuario.nomeUsuario = entregadores.nome;
        usuario.senha = entregadores.senha;
        usuario.email = entregadores.email;
        usuario.tipoUsuario.push(TipoUsuario.ENTREGADOR.toString());
    }

    return usuario;
}

}
