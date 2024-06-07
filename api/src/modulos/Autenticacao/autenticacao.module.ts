import { Module, forwardRef } from '@nestjs/common';
import { AutenticacaoController } from './autenticacao.controller';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { AutenticacaoService } from './autenticacao.service';
import { AutenticaDTO } from './dto/autentica.dto';
import { ClienteEntity } from '../Clientes/entity/cliente.entity';
import { ClienteModule } from '../Clientes/cliente.module';
import { ListarClienteService } from '../Clientes/service/listaClientes';
import { ListarEntregadoresService } from '../Entregadores/service/listaEntregadores';
import { EntregadoresModule } from '../Entregadores/entregadores.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntregadoresEntity } from '../Entregadores/entity/entregadores.entity';
import { CustomLogger } from '../logger/custom-logger.service';
import { CustomLoggerModule } from '../logger/logger.module';
import { ClienteRepositorio } from '../Clientes/repository/cliente_repositorio';
import { EntregadoresRepositorio } from '../Entregadores/repository/entregadores_repositorio';
import { UsuarioService } from '../usuario/service/usuario.service';

@Module({
  imports: [
    CustomLoggerModule,
    TypeOrmModule.forFeature([ClienteEntity, EntregadoresEntity]),
    ClienteModule,
    EntregadoresModule,
    JwtModule.registerAsync({
      useFactory: (configService: ConfigService) => {
        return {
          secret: configService.get<string>('SEGREDO_JWT'),
          signOptions: { expiresIn: '72h' },
        };
      },
      inject: [ConfigService],
      global: true,
    }),
  ],
  controllers: [AutenticacaoController],
  providers: [AutenticaDTO, ClienteRepositorio, EntregadoresRepositorio, AutenticacaoService, ListarClienteService, ListarEntregadoresService, CustomLogger,UsuarioService],
})
export class AutenticacaoModule {}
