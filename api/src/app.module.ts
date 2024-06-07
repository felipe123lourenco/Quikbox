import {
  ClassSerializerInterceptor,
  ConsoleLogger,
  Module,
} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresConfigService } from './config/postgres.config.service';

import { ClienteModule } from './modulos/Clientes/cliente.module';
import { EntregadoresModule } from './modulos/Entregadores/entregadores.module';
import { EntregasModule } from './modulos/Entregas/entregas.module';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { FiltroDeExcecaoGlobal } from './recursos/filtros/filtro-de-excecao-global';
import { AutenticacaoModule } from './modulos/Autenticacao/autenticacao.module';
import { CacheModule } from '@nestjs/cache-manager';
import { redisStore } from 'cache-manager-redis-yet';
import { LoggerGlobalInterceptor } from './recursos/interceptores/logger-global.interceptor';
import { CustomLogger } from './modulos/logger/custom-logger.service';
import { CustomLoggerModule } from './modulos/logger/logger.module';
import { UsuarioModule } from './modulos/usuario/usuario.module';

@Module({
  imports: [
    ClienteModule,
    EntregadoresModule,
    EntregasModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useClass: PostgresConfigService,
      inject: [PostgresConfigService],
    }),
    // // CacheModule.registerAsync({
    // //   useFactory: async () => ({
    // //     store: await redisStore({ ttl: 10 * 1000 }),
    // //   }),
    //   isGlobal: true,
    // }),
    AutenticacaoModule,
    CustomLoggerModule,
    UsuarioModule,
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: FiltroDeExcecaoGlobal,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggerGlobalInterceptor,
    },
    ConsoleLogger,
    CustomLogger,
  ],
})
export class AppModule { }
