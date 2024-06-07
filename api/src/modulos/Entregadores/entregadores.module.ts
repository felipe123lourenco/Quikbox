import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ListarEntregadoresService } from './service/listaEntregadores';
import { CriarEntregadoresService } from './service/criarEntregadoresService';
import { EntregadoresRepositorio } from './repository/entregadores_repositorio';
import { EntregadoresController } from './controller/entregadores.controller';
import { emailNotExistente } from './decorators/email-existente';
import { ValidarEntregadoresService } from './service/validadoresentregadores.service';
import { CustomLoggerModule } from '../logger/logger.module';
import { EntregadoresEntity } from './entity/entregadores.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EntregadoresEntity]), CustomLoggerModule],
  controllers: [EntregadoresController],
  providers: [
    ListarEntregadoresService,
    CriarEntregadoresService,
    EntregadoresRepositorio,
    emailNotExistente,
    ValidarEntregadoresService,
  ],
  exports: [ValidarEntregadoresService, ListarEntregadoresService],
})
export class EntregadoresModule {}
