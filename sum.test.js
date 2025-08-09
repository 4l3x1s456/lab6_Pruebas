import { sum } from './sum.js';

describe('Pruebas de la función suma', () => {
  test('Suma de 1 y 2 debe ser 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('Suma de -1 y 1 debe ser 0', () => {
    expect(sum(-1, 1)).toBe(0);
  });
});
