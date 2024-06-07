import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ListarClienteService } from './service/listaClientes';
import { CriarClienteService } from './service/criarClienteService';
import { ClienteRepositorio } from './repository/cliente_repositorio';
import { ClienteController } from './controller/clientes.controller';
import { emailNotExistente } from './decorators/email-existente';
import { ValidarClienteService } from './service/validadoresCliente.service';
import { CustomLogger } from '../logger/custom-logger.service';
import { CustomLoggerModule } from '../logger/logger.module';
import { ClienteEntity } from './entity/cliente.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ClienteEntity]), CustomLoggerModule],
  controllers: [ClienteController],
  providers: [
    ListarClienteService,
    CriarClienteService,
    ClienteRepositorio,
    emailNotExistente,
    ValidarClienteService, 
    CustomLogger,
  ],
  exports: [ValidarClienteService, ListarClienteService],
})
export class ClienteModule {}
