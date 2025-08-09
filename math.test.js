import { taylorExponential, trapezoidalIntegration } from './math.js';

describe('Pruebas de funciones matemáticas', () => {
    
    describe('Serie de Taylor para e^x', () => {
        test('e^0 debe ser aproximadamente 1', () => {
            const result = taylorExponential(0);
            expect(result).toBeCloseTo(1, 5);
        });
       
    });
    
    describe('Integración trapezoidal', () => {
        test('integral de función constante f(x)=1 en [0,1] debe ser 1', () => {
            const constantFunc = (x) => 1;
            const result = trapezoidalIntegration(constantFunc, 0, 1);
            expect(result).toBeCloseTo(1, 5);
        });
        
    });
});
