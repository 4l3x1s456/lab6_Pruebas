const suma = require('./sum');

describe('Pruebas de la función suma', () => {
  test('Suma de 1 y 2 debe ser 3', () => {
    expect(suma(1, 2)).toBe(3);
  });

  test('Suma de -1 y 1 debe ser 0', () => {
    expect(suma(-1, 1)).toBe(0);
  });
});
