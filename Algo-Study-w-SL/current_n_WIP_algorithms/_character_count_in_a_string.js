function countCharacter(str) {
  let charCount = [];
  for (i = 0; i < str.length; i++) {
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // if (charCount[str[i]]) > 0 {
      if (charCount[str[i]]) {
      charCount[str[i]]++;
    } else {
      charCount[str[i]] = 1;
    }
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
}
return charCount;
}

console.log(countCharacter('javascript'));



