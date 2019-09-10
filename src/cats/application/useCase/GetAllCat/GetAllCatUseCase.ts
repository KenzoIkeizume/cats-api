import { Injectable } from '@nestjs/common';
import { GetAllCatOutput } from './GetAllCatOutput';
import { CatRepository } from '../../repository/CatRepository';

@Injectable()
export class GetAllCatUseCase {
  constructor(private readonly catRepository: CatRepository) {}

  findAll(): Promise<GetAllCatOutput[]> {
    return this.catRepository.getAll();
  }
}
