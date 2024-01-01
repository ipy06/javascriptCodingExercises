//This function calculates the mean of array of integers


function getAverage(marks){
  //TODO : calculate the downward rounded average of the marks array
  let summation = 0
  for (let i = 0; i < marks.length; i++){
    summation += marks[i];
  }
  return Math.floor(summation / marks.length)
}
