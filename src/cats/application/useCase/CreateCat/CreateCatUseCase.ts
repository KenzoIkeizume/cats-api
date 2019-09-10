import { Injectable } from '@nestjs/common';
import { CreateCatInput } from './CreateCatInput';
import { CatRepository } from '../../repository/CatRepository';
import { Cat } from '../../../domain/entities/Cat';

@Injectable()
export class CreateCatUseCase {
  constructor(private readonly catRepository: CatRepository) {}

  create(props: CreateCatInput): Promise<CreateCatInput> {
    const cat = new Cat(props.name, props.age, props.breed);

    const { valid, errors } = cat.isValid();

    if (!valid) {
      throw new Error(errors[0]);
    }

    return this.catRepository.create(props);
  }
}
