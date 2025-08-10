import { taylorExp, taylorSin, simpleIntegration, simpsonIntegration } from './math.js';

describe('Funciones matemáticas avanzadas', () => {
    
    describe('taylorExp', () => {
        test('debería calcular e^0 = 1', () => {
            const result = taylorExp(0, 10);
            expect(result).toBeCloseTo(1, 5);
        });

        test('debería calcular e^1 aproximadamente', () => {
            const result = taylorExp(1, 15);
            expect(result).toBeCloseTo(Math.E, 3);
        });

        test('debería calcular e^2 aproximadamente', () => {
            const result = taylorExp(2, 15);
            expect(result).toBeCloseTo(Math.exp(2), 2);
        });

        test('debería manejar números negativos', () => {
            const result = taylorExp(-1, 15);
            expect(result).toBeCloseTo(Math.exp(-1), 3);
        });

        test('debería lanzar error con argumentos no numéricos', () => {
            expect(() => taylorExp('abc', 10)).toThrow('Los argumentos deben ser números');
            expect(() => taylorExp(1, 'abc')).toThrow('Los argumentos deben ser números');
        });

        test('debería lanzar error con número de términos no positivo', () => {
            expect(() => taylorExp(1, 0)).toThrow('El número de términos debe ser positivo');
            expect(() => taylorExp(1, -5)).toThrow('El número de términos debe ser positivo');
        });
    });

    describe('taylorSin', () => {
        test('debería calcular sin(0) = 0', () => {
            const result = taylorSin(0, 10);
            expect(result).toBeCloseTo(0, 5);
        });

        test('debería calcular sin(π/2) aproximadamente', () => {
            const result = taylorSin(Math.PI / 2, 15);
            expect(result).toBeCloseTo(1, 3);
        });

        test('debería calcular sin(π) aproximadamente', () => {
            const result = taylorSin(Math.PI, 15);
            expect(result).toBeCloseTo(0, 3);
        });

        test('debería calcular sin(-π/2) aproximadamente', () => {
            const result = taylorSin(-Math.PI / 2, 15);
            expect(result).toBeCloseTo(-1, 3);
        });

        test('debería lanzar error con argumentos no numéricos', () => {
            expect(() => taylorSin('abc', 10)).toThrow('Los argumentos deben ser números');
            expect(() => taylorSin(1, 'abc')).toThrow('Los argumentos deben ser números');
        });

        test('debería lanzar error con número de términos no positivo', () => {
            expect(() => taylorSin(1, 0)).toThrow('El número de términos debe ser positivo');
        });
    });

    describe('simpleIntegration', () => {
        test('debería integrar una función constante', () => {
            const constantFunc = () => 5;
            const result = simpleIntegration(constantFunc, 0, 2, 100);
            expect(result).toBeCloseTo(10, 2); // 5 * (2-0) = 10
        });

        test('debería integrar una función lineal', () => {
            const linearFunc = (x) => x;
            const result = simpleIntegration(linearFunc, 0, 2, 1000);
            expect(result).toBeCloseTo(2, 1); // integral de x de 0 a 2 = x²/2 = 4/2 = 2
        });

        test('debería integrar una función cuadrática', () => {
            const quadraticFunc = (x) => x * x;
            const result = simpleIntegration(quadraticFunc, 0, 3, 1000);
            expect(result).toBeCloseTo(9, 0); // integral de x² de 0 a 3 = x³/3 = 27/3 = 9
        });

        test('debería lanzar error con función no válida', () => {
            expect(() => simpleIntegration('not a function', 0, 1, 100)).toThrow('El primer argumento debe ser una función');
        });

        test('debería lanzar error con límites inválidos', () => {
            const func = (x) => x;
            expect(() => simpleIntegration(func, 'a', 1, 100)).toThrow('Los límites y el número de subdivisiones deben ser números');
            expect(() => simpleIntegration(func, 0, 'b', 100)).toThrow('Los límites y el número de subdivisiones deben ser números');
            expect(() => simpleIntegration(func, 2, 1, 100)).toThrow('El límite inferior debe ser menor que el superior');
        });

        test('debería lanzar error con número de subdivisiones inválido', () => {
            const func = (x) => x;
            expect(() => simpleIntegration(func, 0, 1, 0)).toThrow('El número de subdivisiones debe ser positivo');
            expect(() => simpleIntegration(func, 0, 1, -10)).toThrow('El número de subdivisiones debe ser positivo');
        });
    });

    describe('simpsonIntegration', () => {
        test('debería integrar una función constante', () => {
            const constantFunc = () => 5;
            const result = simpsonIntegration(constantFunc, 0, 2, 100);
            expect(result).toBeCloseTo(10, 2);
        });

        test('debería integrar una función cuadrática con mayor precisión', () => {
            const quadraticFunc = (x) => x * x;
            const result = simpsonIntegration(quadraticFunc, 0, 3, 100);
            expect(result).toBeCloseTo(9, 1); // integral de x² de 0 a 3 = 9
        });

        test('debería ser más preciso que la integración simple para funciones polinómicas', () => {
            const cubicFunc = (x) => x * x * x;
            const simpsonResult = simpsonIntegration(cubicFunc, 0, 2, 100);
            const simpleResult = simpleIntegration(cubicFunc, 0, 2, 100);
            const exactValue = 4; // integral de x³ de 0 a 2 = x⁴/4 = 16/4 = 4
            
            expect(Math.abs(simpsonResult - exactValue)).toBeLessThan(Math.abs(simpleResult - exactValue));
        });

        test('debería lanzar error con número impar de subdivisiones', () => {
            const func = (x) => x;
            expect(() => simpsonIntegration(func, 0, 1, 101)).toThrow('El número de subdivisiones debe ser positivo y par');
        });

        test('debería lanzar error con función no válida', () => {
            expect(() => simpsonIntegration('not a function', 0, 1, 100)).toThrow('El primer argumento debe ser una función');
        });
    });

    // Pruebas que fallarán intencionalmente (comentadas para el primer commit exitoso)
    
    describe('Pruebas que fallan intencionalmente', () => {
        test('Esta prueba fallará - taylorSin incorrecto', () => {
            const result = taylorSin(Math.PI / 2, 10);
            expect(result).toBeCloseTo(1, 3); // Valor corregido
        });
        test('Esta prueba fallará - simpleIntegration incorrecto', () => {
            const constantFunc = () => 5;
            const result = simpleIntegration(constantFunc, 0, 2, 100);
            expect(result).toBeCloseTo(10, 2); // Valor corregido
        });
    });
    
});
