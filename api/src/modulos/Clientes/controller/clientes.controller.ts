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

import { CriarClienteService } from '../service/criarClienteService';
import { AtualizaClienteDTO, CriaClienteDTO } from '../dto/Cliente';
import { ListarClienteService } from '../service/listaClientes';
import { AutenticacaoGuard } from '../../Autenticacao/autenticacao.guard';
import { HashSenhaPipe } from 'src/recursos/pipes/hash-senha.pipe';

//@UseGuards(AutenticacaoGuard)
@Controller('clientes')
export class ClienteController {
  constructor(
    private readonly criarClienteService: CriarClienteService,
    private readonly listarClienteService: ListarClienteService,
  ) { }

  @Post('criar')
  async criaCliente(@Body() {senha, ...data}: CriaClienteDTO,@Body('senha', HashSenhaPipe)senhaHasheada: string,) {
    return await this.criarClienteService.cadastraCliente({...data, senha: senhaHasheada});
  }

  @Get('listar')
  async listaCliente() {
    return await this.listarClienteService.listarCliente();
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
