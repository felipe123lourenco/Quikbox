import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { EntregasEntity } from './entity/entregas.entity';
import { EntregasController } from './controller/entregas.controller';
import { EntregasRepositorio } from './repository/entregas_repositorio';
import { EntregasService } from './service/cadastraEntregas';
import { ValidadorEntregasServices } from './service/validadorEntregas.sevices';
import { CustomLoggerModule } from '../logger/logger.module';
import { ListarEntregasService } from './service/listaEntregas';
import { CriarEntregasService } from './service/criarEntregasService';

@Module({
  imports: [TypeOrmModule.forFeature([EntregasEntity]), CustomLoggerModule],
  controllers: [EntregasController],
  providers: [
    EntregasService,
    EntregasRepositorio,
    ValidadorEntregasServices,
    ListarEntregasService,
    CriarEntregasService
  ],
  exports: [ValidadorEntregasServices, EntregasService, ListarEntregasService, CriarEntregasService],
})
export class EntregasModule {}
