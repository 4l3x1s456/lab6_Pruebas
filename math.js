// Funciones matemáticas avanzadas

/**
 * Calcula la serie de Taylor para e^x hasta n términos
 * @param {number} x - El valor de x
 * @param {number} n - Número de términos de la serie
 * @returns {number} - Aproximación de e^x
 */
export function taylorExp(x, n = 10) {
    if (typeof x !== 'number' || typeof n !== 'number') {
        throw new Error('Los argumentos deben ser números');
    }
    if (n <= 0) {
        throw new Error('El número de términos debe ser positivo');
    }
    
    let result = 0;
    let factorial = 1;
    
    for (let i = 0; i < n; i++) {
        if (i > 0) {
            factorial *= i;
        }
        result += Math.pow(x, i) / factorial;
    }
    
    return result;
}

/**
 * Calcula la serie de Taylor para sin(x) hasta n términos
 * @param {number} x - El valor de x en radianes
 * @param {number} n - Número de términos de la serie
 * @returns {number} - Aproximación de sin(x)
 */
export function taylorSin(x, n = 10) {
    if (typeof x !== 'number' || typeof n !== 'number') {
        throw new Error('Los argumentos deben ser números');
    }
    if (n <= 0) {
        throw new Error('El número de términos debe ser positivo');
    }
    
    let result = 0;
    
    for (let i = 0; i < n; i++) {
        const term = 2 * i + 1;
        const factorial = factorialFunction(term);
        const sign = Math.pow(-1, i);
        result += sign * Math.pow(x, term) / factorial;
    }
    
    return result;
}

/**
 * Integración numérica simple usando la regla del trapecio
 * @param {Function} func - La función a integrar
 * @param {number} a - Límite inferior
 * @param {number} b - Límite superior
 * @param {number} n - Número de subdivisiones
 * @returns {number} - Aproximación de la integral
 */
export function simpleIntegration(func, a, b, n = 1000) {
    if (typeof func !== 'function') {
        throw new Error('El primer argumento debe ser una función');
    }
    if (typeof a !== 'number' || typeof b !== 'number' || typeof n !== 'number') {
        throw new Error('Los límites y el número de subdivisiones deben ser números');
    }
    if (n <= 0) {
        throw new Error('El número de subdivisiones debe ser positivo');
    }
    if (a >= b) {
        throw new Error('El límite inferior debe ser menor que el superior');
    }
    
    const h = (b - a) / n;
    let result = (func(a) + func(b)) / 2;
    
    for (let i = 1; i < n; i++) {
        const x = a + i * h;
        result += func(x);
    }
    
    return result * h;
}

/**
 * Integración usando la regla de Simpson
 * @param {Function} func - La función a integrar
 * @param {number} a - Límite inferior
 * @param {number} b - Límite superior
 * @param {number} n - Número de subdivisiones (debe ser par)
 * @returns {number} - Aproximación de la integral
 */
export function simpsonIntegration(func, a, b, n = 1000) {
    if (typeof func !== 'function') {
        throw new Error('El primer argumento debe ser una función');
    }
    if (typeof a !== 'number' || typeof b !== 'number' || typeof n !== 'number') {
        throw new Error('Los límites y el número de subdivisiones deben ser números');
    }
    if (n <= 0 || n % 2 !== 0) {
        throw new Error('El número de subdivisiones debe ser positivo y par');
    }
    if (a >= b) {
        throw new Error('El límite inferior debe ser menor que el superior');
    }
    
    const h = (b - a) / n;
    let result = func(a) + func(b);
    
    for (let i = 1; i < n; i++) {
        const x = a + i * h;
        const coefficient = i % 2 === 0 ? 2 : 4;
        result += coefficient * func(x);
    }
    
    return result * h / 3;
}

/**
 * Función auxiliar para calcular factorial
 * @param {number} n - Número para calcular factorial
 * @returns {number} - Factorial de n
 */
function factorialFunction(n) {
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
