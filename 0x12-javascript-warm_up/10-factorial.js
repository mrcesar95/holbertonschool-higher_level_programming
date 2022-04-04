#!/usr/bin/node
// script that computes the factorial of a number

const { argv } = require('process');
const n = parseInt(argv[2]);

function factorial (n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(n));
