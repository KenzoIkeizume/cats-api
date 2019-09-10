import { Injectable } from '@nestjs/common';
import { CatModel } from '../model/CatModel';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CatRepository } from 'src/cats/application/repository/CatRepository';

@Injectable()
export class CatDatabaseRepository implements CatRepository {
  constructor(
    @InjectRepository(CatModel) private readonly model: Repository<CatModel>,
  ) {}

  async create(catModel: CatModel): Promise<CatModel> {
    return this.model.save(catModel);
  }

  async getAll(): Promise<CatModel[]> {
    return this.model.find();
  }
}
