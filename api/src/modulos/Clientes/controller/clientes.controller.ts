import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';

import { AtualizaClienteDTO, CriaClienteDTO } from '../dto/Cliente';
import { ClienteService } from '../../Clientes/service/cliente.service';
import { AutenticacaoGuard } from '../../Autenticacao/autenticacao.guard';
import { HashSenhaPipe } from 'src/recursos/pipes/hash-senha.pipe';

//@UseGuards(AutenticacaoGuard)
@Controller('clientes')
export class ClienteController {
  constructor(
    private readonly clienteService: ClienteService,
  ) { }

  @Post('criar')
  async criaCliente(@Body() {senha, ...data}: CriaClienteDTO,@Body('senha', HashSenhaPipe)senhaHasheada: string,) {
    return await this.clienteService.cadastraCliente({...data, senha: senhaHasheada});
  }

  @Get('listar')
  async listaCliente() {
    return await this.clienteService.listarCliente();
  }

  @Patch(':id')
  async atualizaCliente(
    @Param('id') id: string,
    @Body() dadosCliente: AtualizaClienteDTO,
  ) {
    return this.atualizaCliente(id, dadosCliente);
  }

  @Delete(':id')
  async deletaCliente(@Param('id') id: string) {
    return this.deletaCliente(id);
  }
}
