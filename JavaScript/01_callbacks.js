'use strict';

// 1. Arrow function call example:
const multiply = (a, b) => a * b;
const result = multiply(5, 10);
console.log('Multiplication Result:', result);

// 2. Higher-order asynchronous function returning a callback:
const performOperation = (x, y, callback) => {
    const result = x + y;
    setTimeout(() => {
        callback(result);
    }, 1000);
};

performOperation(10, 15, (operationResult) => {
    console.log('Operation Result:', operationResult);
});

// 3. Higher-order asynchronous function using the callback last error-first and callback-last patterns:
const divide = (a, b, callback) => {
    if (a === 0 || b === 0) {
        const error = new Error('Division by zero is not allowed');
        callback(error, null);
    }
    const result = a / b;
    setTimeout(() => {
        callback(null, result);
    }, 2000);
};
