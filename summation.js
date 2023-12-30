/*
 * Write a program that finds the summation of every number from 1 to num. 
 * The number will always be a positive integer greater than 0. 
 * Your function only needs to return the result
 */


var summation = function (num) {
  // Code here
  let i = num;
  let summation = 0;
  while (i > 0){
    summation += i
    i--
  }
  return summation
}


//Using the arithmetic progression formula:


let summation = n => n * (n + 1) / 2;
