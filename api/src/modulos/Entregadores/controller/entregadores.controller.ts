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

import { EntregadorService } from '../../Entregadores/service/entregador.service';
import { AtualizaEntregadoresDTO, CriaEntregadoresDTO } from '../dto/Entregadores';
import { AutenticacaoGuard } from '../../Autenticacao/autenticacao.guard';
import { HashSenhaPipe } from 'src/recursos/pipes/hash-senha.pipe';

// @UseGuards(AutenticacaoGuard)
@Controller('entregadores')
export class EntregadoresController {
  constructor(
    private readonly entregadoresService: EntregadorService,
  ) {}

  @Post('criar')
  async criaEntregadores(@Body()  {senha, ...data}: CriaEntregadoresDTO,@Body('senha', HashSenhaPipe)senhaHasheada: string) {
      return await this.entregadoresService.cadastraEntregadores({...data, senha: senhaHasheada});
  }

  @Get('listar')
  async listaEntregadores() {
    return await this.entregadoresService.listarEntregadores();
  }

  
  @Patch(':id')
  async atualizaEntregadores(
    @Param('id') id: string,
    @Body() dadosEntregadores: AtualizaEntregadoresDTO,
  ) {
    return this.atualizaEntregadores(id, dadosEntregadores);
  }

  @Delete(':id')
  async deletaEntregadores(@Param('id') id: string) {
    return this.deletaEntregadores(id);
  }
}
