import { Body, Controller, Delete, Get, Param, Post, Query, Put } from '@nestjs/common';
import { CriaEntregasDTO } from '../dto/CriaEntregas.dto';
// import { AtualizaEntregasDTO } from '../dto/AtualizaEntregas.dto';
import { EntregasService } from '../service/entregas.service';
import { StatusEntrega } from 'src/recursos/enums/status-entrega.enum';

// @UseGuards(AutenticacaoGuard)
@Controller('entregas')
export class EntregasController {
  constructor(private readonly entregasService: EntregasService) { }

  @Post()
  async criaEntregas(@Body() data: CriaEntregasDTO) {
    return await this.entregasService.cadastraEntregas(data);
  }

  @Get()
  async listaEntregas() {
    return await this.entregasService.listarEntregas();
  }

  @Get('gerar-codigo-coleta')
  async gerarCodigoColeta() {
    return await this.entregasService.gerarCodigoColeta();
  }

  @Get(':id')
  async buscaEntregas(@Param('id') id: string) {
    return await this.entregasService.buscarEntregaPorId(id);
  }

  @Get('obter-codigo-entrega/:uf')
  async obterCodigoEntrega(@Param('uf') uf: string) {
    return await this.entregasService.gerarCodigoEntrega(uf);
  }

  // @Patch(':id')
  // async atualizaEntregas(
  //   @Param('id') id: string,
  //   @Body() dadosEntrega: AtualizaEntregasDTO,
  // ) {
  //   //return this.entregasService.atualizaEntregas(id, dadosEntrega);
  // }

  @Delete(':id')
  async deletaEntregas(@Param('id') id: string) {
    return this.deletaEntregas(id);
  }

  @Get('listar/status')
  async obterEntregasGrupoStatus() {
    return this.entregasService.obterEntregasGrupoStatus();
  }

  @Get('listar/entregas/entregador/:id')
  async obterEntregasPendentesEntregador(id: string) {
    return this.entregasService.obterEntregasPendentesEntregador(id);
  }

  @Get('/dashboard/empresa/listar/')
  async obterEntregasStatus (@Query('status') status: string) {
    return this.entregasService.obterEntregasStatus(status);      
  }

  @Put('/confirma-entrega/:id')
  async confirmaEntregas(
    @Param('id') id: string, @Param('codigoConfirmacao') codigoConfirmacao: string
  ) {
    return await this.entregasService.atualizaStatusEntrega(id, StatusEntrega.ENTREGUE, codigoConfirmacao);
  }
}
