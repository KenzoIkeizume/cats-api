import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatModel } from './cats/infra/model/CatModel';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'admin',
      database: 'cat',
      entities: [CatModel],
      synchronize: true,
    }),
    CatsModule,
  ],
})
export class AppModule {}
