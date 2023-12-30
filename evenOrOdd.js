//This is a function that determines if a number is even or Odd

function evenOrOdd(number) {
  if(number % 2 == 0)
    return "Even"
  return "Odd"
}

//Another Solution: 

function evenOrOdd(number) {
  return number % 2 === 0 ? 'Even' : 'Odd';
}
