import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { EntregasEntity } from './entity/entregas.entity';
import { EntregasController } from './controller/entregas.controller';
import { EntregasRepositorio } from './repository/entregas_repositorio';
import { EntregasService } from './service/cadastraEntregas';
import { EntregasDTO } from './dto/entregasDTO';
import { ValidadorEntregasServices } from './service/validadorEntregas.sevices';
import { CustomLoggerModule } from '../logger/logger.module';

@Module({
  imports: [TypeOrmModule.forFeature([EntregasEntity]), CustomLoggerModule],
  controllers: [EntregasController],
  providers: [
    EntregasService,
    EntregasRepositorio,
    EntregasDTO,
    ValidadorEntregasServices,
  ],
  exports: [ValidadorEntregasServices, EntregasService],
})
export class EntregasModule {}
