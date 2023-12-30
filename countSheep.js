//This is a function that counts the number of sheeps in an array of true, false, and null values
/*For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]

*/


function countSheeps(sheep) {
  let count = 0
  for (let i = 0; i < sheep.length; i++){
    if (sheep[i] == true){
      count++
    }
  }
  return count
}
