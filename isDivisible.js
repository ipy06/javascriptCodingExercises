//This function takes a determines if a number n is divisible by both numbers x and y

function isDivisible(n, x, y) {
  if ((n % x == 0) && (n % y == 0)){
    return true;
  }
  return false;
}


//Another approach using the arrow function 

let isDivisible = (n, x, y) => ((n % x == 0) && (n % y == 0)) ? true : false ;


//A more intelligent way to solve it 


function isDivisible(n, x, y) {
  return !(n%x||n%y)
}
