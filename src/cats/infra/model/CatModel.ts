import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CatModel {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 500 })
  name: string;
  @Column('int')
  age: number;
  @Column()
  breed: string;
}
