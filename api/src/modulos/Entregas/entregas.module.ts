import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { EntregasEntity } from './entity/entregas.entity';
import { EntregasController } from './controller/entregas.controller';
import { CustomLoggerModule } from '../logger/logger.module';
import { EntregasService } from './service/entregas.service';

@Module({
  imports: [TypeOrmModule.forFeature([EntregasEntity]), CustomLoggerModule],
  controllers: [EntregasController],
  providers: [EntregasService],
  exports: [EntregasService],
})
export class EntregasModule { }
