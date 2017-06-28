function countLetters(stringInput) {

  var charsInString = {};
  stringInput = stringInput.toLowerCase().split(' ').join('').split('');

  for (var i = 0; i < stringInput.length; i++) {
    if (charsInString[stringInput[i]] === undefined) {
      charsInString[stringInput[i]] = {};
      charsInString[stringInput[i]]["indexList"] = [];
    }
    charsInString[stringInput[i]]["indexList"].push(i);
    console.log(charsInString[stringInput[i]]["indexList"] + " was increased.");
  }
  return charsInString;
}

console.log(countLetters("Hello world how goes"));