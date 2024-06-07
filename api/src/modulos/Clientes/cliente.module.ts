import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ClienteService } from '../Clientes/service/cliente.service';
import { ClienteRepositorio } from './repository/cliente_repositorio';
import { ClienteController } from './controller/clientes.controller';
import { emailNotExistente } from './decorators/email-existente';
import { CustomLogger } from '../logger/custom-logger.service';
import { CustomLoggerModule } from '../logger/logger.module';
import { ClienteEntity } from './entity/cliente.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ClienteEntity]), CustomLoggerModule],
  controllers: [ClienteController],
  providers: [
    ClienteService,
    ClienteRepositorio,
    emailNotExistente,
    CustomLogger,
  ],
  exports: [ClienteService],
})
export class ClienteModule {}
