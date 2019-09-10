import { CreateCatUseCase } from './CreateCatUseCase';

describe('CreateCatuseCase', () => {
  let createCatUseCase;
  let catRepository;
  let cats;

  beforeEach(() => {
    cats = [];
    catRepository = {
      create: cat => {
        cats.push(cat);
        return cat;
      },
    };
    createCatUseCase = new CreateCatUseCase(catRepository);
  });

  it('Expect to create a cat', () => {
    const testObj = { name: 'teste', age: '22', breed: 'breed-test' };
    createCatUseCase.create(testObj);

    expect(cats).toEqual([testObj]);
  });
});
