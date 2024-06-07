import { Body, Controller, Delete, Get, Param, Post, Query, Put } from '@nestjs/common';
import { CriaEntregasDTO } from '../dto/CriaEntregas.dto';
// import { AtualizaEntregasDTO } from '../dto/AtualizaEntregas.dto';
import { EntregasService } from '../service/entregas.service';
import { StatusEntrega } from 'src/recursos/enums/status-entrega.enum';
import internal from 'node:stream';

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

  @Put('/mudastatus/:id')
  async confirmaEntregas(
    @Param('id') id: string, @Param('codigoConfirmacao') codigoConfirmacao: string, @Param('status') status: string
  ) {
    let statusEntrega: StatusEntrega;
    switch (status.toString().toUpperCase()) {
      case 'AGUARDANDO_COLETA':
        statusEntrega = StatusEntrega.AGUARDANDO_COLETA;
        break;    
      case 'EM_ROTA':
        statusEntrega = StatusEntrega.EM_ROTA;
        break;
      case 'ENTREGUE':
        statusEntrega = StatusEntrega.ENTREGUE;
        break;
      case 'CANCELADO':
        statusEntrega = StatusEntrega.CANCELADO;
        break;
      default:
        statusEntrega = StatusEntrega.PENDENTE;
    }
    return await this.entregasService.atualizaStatusEntrega(id, statusEntrega , codigoConfirmacao);
  }
}
