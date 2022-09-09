import { UniqueIdService } from './unique-id.service';

describe(UniqueIdService.name, () => {
  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should generate id when called with prefix`, () => {
    //criar um novo service
    const service = new UniqueIdService();
    //Criar uma variável de um novo id
    const id = service.generateUniqueIdWithPrefix('app');
    //o que esperar dessa váriavel
    expect(id.startsWith('app-')).toBeTrue();
  });
});

// Escopo de teste
// describe('O artefato que queremos testar', () => {
//   it('Primeira condição que queremos testar', () => {});
//   it('Segunda condição que queremos testar', () => {});
//   it('Terceira condição que queremos testar', () => {});
// });
