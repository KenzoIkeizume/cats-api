import { Controller, Post, Body, Get } from '@nestjs/common';
import { CreateCatInput } from '../application/useCase/CreateCat/CreateCatInput';
import { CreateCatUseCase } from '../application/useCase/CreateCat/CreateCatUseCase';
import { GetAllCatUseCase } from '../application/useCase/GetAllCat/GetAllCatUseCase';

@Controller('cats')
export class CatsController {
  constructor(
    private readonly createCatUseCase: CreateCatUseCase,
    private readonly getAllCatUseCase: GetAllCatUseCase,
  ) {}

  @Post()
  async create(@Body() createCatInput: CreateCatInput) {
    try {
      return this.createCatUseCase.create(createCatInput);
    } catch (error) {
      throw error;
    }
  }

  @Get()
  async findAll() {
    try {
      return this.getAllCatUseCase.findAll();
    } catch (error) {
      throw error;
    }
  }
}
