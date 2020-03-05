"use strict";

/**
 * Функция сложения 2-х чисел.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function summ(a, b) {
    return a + b;
}

/**
 * Функция из параметра "а" вычитает параметр "b".
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function subtraction(a, b) {
    return a - b;
}

/**
 * Функция делит параметр "a" на параметр "b".
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function division(a, b) {
    return a / b;
}

/**
 * Функция умножает параметры.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function multiplication(a, b) {
    return a * b;
}

/**
 * Функция получает два числа и осуществляет над ними одну из заданных
   математических операций.
 * @param {number} arg1
 * @param {number} arg2
 * @param {string} operation "+", "-", "/", "*".
 * @throws {Error} если передана не поддерживаемая операция, то выдаст ошибку.
 * @returns {number}
 */
function mathCalc(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            return summ(arg1, arg2);
        case "-":
            return subtraction(arg1, arg2);
        case "/":
            return division(arg1, arg2);
        case "*":
            return multiplication(arg1, arg2);
        default:
            throw new Error("Операция " + operation + " не поддерживается");
    }
}

console.log(mathCalc(4, 9, "+"));
console.log(mathCalc(4, 9, "-"));
console.log(mathCalc(4, 9, "/"));
console.log(mathCalc(4, 9, "*"));
console.log(mathCalc(4, 9, "сумма"));