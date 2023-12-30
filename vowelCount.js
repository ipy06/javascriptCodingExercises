//This function counts the number of vowels in a string

function getCount(str) {
  let strList = str.split('');
  let vowelCounts = 0;
  for (let i = 0; i < strList.length; i++){
    if ((strList[i] ==='a') || (strList[i] ==='e') || (strList[i] ==='i') || (strList[i] ==='o') || (strList[i] ==='u')){
      vowelCounts++
    }
  }
  return vowelCounts;
}

//Same code but reimplemented using a switch case conditional.


function getCount(str) {
  let strList = str.split('');
  let vowelCounts = 0;
  for (let i = 0; i < strList.length; i++){
    switch (strList[i]){
        case 'a':
          vowelCounts++
          break;
        case 'e':
          vowelCounts++
          break;
        case 'i':
          vowelCounts++
          break;
        case 'o':
          vowelCounts++
          break;
        case 'u':
          vowelCounts++
          break;
    }
  }
  return vowelCounts;
}
