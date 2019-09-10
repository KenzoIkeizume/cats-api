import { CreateCatInput } from '../useCase/CreateCat/CreateCatInput';
import { CatModel } from 'src/cats/infra/model/CatModel';

export abstract class CatRepository {
  abstract create(catModel: CreateCatInput): Promise<CatModel>;
  abstract getAll(): Promise<CreateCatInput[]>;
}
