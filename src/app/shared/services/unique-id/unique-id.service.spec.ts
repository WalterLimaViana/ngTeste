import { UniqueIdService } from './unique-id.service';

describe(UniqueIdService.name, () => {
  //criar um novo service para todos os it:
  let service: UniqueIdService = null;

  beforeEach(() => {
    service = new UniqueIdService();
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should generate id when called with prefix`, () => {
    //Criar uma variável de um novo id
    const id = service.generateUniqueIdWithPrefix('app');
    //o que esperar dessa váriavel
    expect(id.startsWith('app-')).toBeTrue();
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should not generate duplicate IDs when called multiple times`, () => {
    const ids = new Set();
    for (let i = 0; i < 50; i++) {
      ids.add(service.generateUniqueIdWithPrefix('app'));
    }
    expect(ids.size).toBe(50);
  });

  it(`#${UniqueIdService.prototype.getNumberOfGeneratedUniqueIds.name} should return the number generatedIds when called`, () => {
    service.generateUniqueIdWithPrefix('app');
    service.generateUniqueIdWithPrefix('app');
    expect(service.getNumberOfGeneratedUniqueIds()).toBe(2);
  });
});

// Escopo de teste
// describe('O artefato que queremos testar', () => {
//   it('Primeira condição que queremos testar', () => {});
//   it('Segunda condição que queremos testar', () => {});
//   it('Terceira condição que queremos testar', () => {});
// });
