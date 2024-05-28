import { Injectable } from '@nestjs/common';
import { EntregasRepositorio } from '../repository/entregas_repositorio';

@Injectable()
export class ValidarEntregasService {
  constructor(private readonly autor: EntregasRepositorio) {}  
}
