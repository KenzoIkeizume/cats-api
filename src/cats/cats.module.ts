import { Module } from '@nestjs/common';
import { CatsController } from './input/cats.controller';
import { CreateCatUseCase } from './application/useCase/CreateCat/CreateCatUseCase';
import { CatRepository } from './application/repository/CatRepository';
import { GetAllCatUseCase } from './application/useCase/GetAllCat/GetAllCatUseCase';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatModel } from './infra/model/CatModel';
import { CatDatabaseRepository } from './infra/repository/CatDatabaseRepository';

@Module({
  imports: [TypeOrmModule.forFeature([CatModel])],
  controllers: [CatsController],
  providers: [
    CreateCatUseCase,
    GetAllCatUseCase,
    { provide: CatRepository, useClass: CatDatabaseRepository },
  ],
})
export class CatsModule {}
