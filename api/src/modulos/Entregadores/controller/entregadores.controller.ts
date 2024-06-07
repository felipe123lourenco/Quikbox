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

import { CriarEntregadoresService } from '../service/criarEntregadoresService';
import { AtualizaEntregadoresDTO, CriaEntregadoresDTO } from '../dto/Entregadores';
import { ListarEntregadoresService } from '../service/listaEntregadores';
import { AutenticacaoGuard } from '../../Autenticacao/autenticacao.guard';
import { HashSenhaPipe } from 'src/recursos/pipes/hash-senha.pipe';

// @UseGuards(AutenticacaoGuard)
@Controller('entregadores')
export class EntregadoresController {
  constructor(
    private readonly criarEntregadoresService: CriarEntregadoresService,
    private readonly listarEntregadoresService: ListarEntregadoresService,
  ) {}

  @Post('criar')
  async criaEntregadores(@Body()  {senha, ...data}: CriaEntregadoresDTO,@Body('senha', HashSenhaPipe)senhaHasheada: string) {
      return await this.criarEntregadoresService.cadastraEntregadores({...data, senha: senhaHasheada});
  }

  @Get('listar')
  async listaEntregadores() {
    return await this.listarEntregadoresService.listarEntregadores();
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
