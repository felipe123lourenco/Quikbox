import { PartialType } from '@nestjs/mapped-types';
import { CriaEntregasDTO } from './CriaEntregas.dto';

export class AtualizaEntregasDTO extends PartialType(CriaEntregasDTO) { }
