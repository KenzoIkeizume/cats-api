import { EntityValidationResult } from '../structures/EntityValidationResult';

class BaseEntity {
  public errors: string[] = [];

  public isValid = (): EntityValidationResult => ({
    valid: this.errors.length === 0,
    errors: this.errors,
  });
}

export default BaseEntity;
