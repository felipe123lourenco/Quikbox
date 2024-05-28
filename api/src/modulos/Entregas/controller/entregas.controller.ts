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

import { CriarEntregasService } from '../service/criarEntregasService';
import { AtualizaEntregasDTO, CriaEntregasDTO } from '../dto/Entregas';
import { ListarEntregasService } from '../service/listaEntregas';
import { AutenticacaoGuard } from '../../Autenticacao/autenticacao.guard';

@UseGuards(AutenticacaoGuard)
@Controller('entregas')
export class EntregasController {
  constructor(
    private readonly criarEntregasService: CriarEntregasService,
    private readonly listarEntregasService: ListarEntregasService,
  ) {}

  @Post('criar')
  async criaEntregas(@Body() data: CriaEntregasDTO) {
    return await this.criarEntregasService.cadastraEntregas(data);
  }

  @Get('listar')
  async listaEntregas() {
    return await this.listarEntregasService.listarEntregas();
  }

  
  @Patch(':id')
  async atualizaEntregas(
    @Param('id') id: string,
    @Body() dadosCliente: AtualizaEntregasDTO,
  ) {
    return this.atualizaEntregas(id, dadosCliente);
  }

  @Delete(':id')
  async deletaEntregas(@Param('id') id: string) {
    return this.deletaEntregas(id);
  }
}
