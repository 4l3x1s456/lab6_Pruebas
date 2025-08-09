/**
 * Funciones matemáticas para pruebas unitarias
 */

/**
 * Aproximación de e^x usando serie de Taylor
 * e^x = 1 + x + x²/2! + x³/3! + x⁴/4! + ...
 * @param {number} x - El exponente
 * @param {number} terms - Número de términos a usar (por defecto 10)
 * @returns {number} Aproximación de e^x
 */
export function taylorExponential(x, terms = 10) {
    if (typeof x !== 'number' || typeof terms !== 'number') {
        throw new Error('Los argumentos deben ser números');
    }
    
    if (terms <= 0) {
        throw new Error('El número de términos debe ser positivo');
    }
    
    let result = 1; // Primer término es 1
    let factorial = 1;
    let power = 1;
    
    for (let i = 1; i < terms; i++) {
        power *= x;
        factorial *= i;
        result += power / factorial;
    }
    
    return result;
}

/**
 * Integración numérica usando el método del trapecio
 * Aproxima la integral definida de f(x) en el intervalo [a, b]
 * @param {Function} func - La función a integrar
 * @param {number} a - Límite inferior
 * @param {number} b - Límite superior
 * @param {number} n - Número de subdivisiones (por defecto 1000)
 * @returns {number} Aproximación de la integral
 */
export function trapezoidalIntegration(func, a, b, n = 1000) {
    if (typeof func !== 'function') {
        throw new Error('El primer argumento debe ser una función');
    }
    
    if (typeof a !== 'number' || typeof b !== 'number' || typeof n !== 'number') {
        throw new Error('Los límites y número de subdivisiones deben ser números');
    }
    
    if (n <= 0) {
        throw new Error('El número de subdivisiones debe ser positivo');
    }
    
    if (a === b) {
        return 0;
    }
    
    const h = (b - a) / n;
    let sum = (func(a) + func(b)) / 2;
    
    for (let i = 1; i < n; i++) {
        sum += func(a + i * h);
    }
    
    return sum * h;
}

/**
 * Función auxiliar para calcular x²
 * @param {number} x
 * @returns {number} x²
 */
export function square(x) {
    return x * x;
}

/**
 * Función auxiliar para calcular factorial
 * @param {number} n
 * @returns {number} n!
 */
export function factorial(n) {
    if (typeof n !== 'number' || n < 0 || !Number.isInteger(n)) {
        throw new Error('El factorial solo está definido para números enteros no negativos');
    }
    
    if (n === 0 || n === 1) {
        return 1;
    }
    
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    
    return result;
}
