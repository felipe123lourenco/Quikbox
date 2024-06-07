import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { EntregadoresRepositorio } from './repository/entregadores_repositorio';
import { EntregadoresController } from './controller/entregadores.controller';
import { emailNotExistente } from './decorators/email-existente';
import { EntregadorService } from '../Entregadores/service/entregador.service';
import { CustomLoggerModule } from '../logger/logger.module';
import { EntregadoresEntity } from './entity/entregadores.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EntregadoresEntity]), CustomLoggerModule],
  controllers: [EntregadoresController],
  providers: [
    EntregadorService,
    EntregadoresRepositorio,
    emailNotExistente,
  ],
  exports: [EntregadorService],
})
export class EntregadoresModule {}
