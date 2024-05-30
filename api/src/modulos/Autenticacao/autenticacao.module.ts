import { Module } from '@nestjs/common';
import { AutenticacaoController } from './autenticacao.controller';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { UsuarioModule } from '../usuario/usuario.module';
import { AutenticacaoService } from './autenticacao.service';
import { AutenticaDTO } from './dto/autentica.dto';
import { UsuarioService } from '../usuario/service/usuario.service';

@Module({
  imports: [
    UsuarioModule,
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
  providers: [AutenticaDTO, AutenticacaoService, UsuarioService],
})
export class AutenticacaoModule {}
