import BaseEntity from '../../../core/entities/BaseEntity';
import { CatStucture } from '../structures/CatStructure';

export class Cat extends BaseEntity implements CatStucture {
  constructor(
    readonly name: string,
    readonly age: number,
    readonly breed: string,
  ) {
    super();

    this.validateAge();
  }

  private validateAge = () => {
    if (this.age < 18) {
      this.errors.push('Age must be bigger then 18.');
    }
  };
}
