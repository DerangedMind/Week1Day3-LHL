function countLetters(stringInput) {

  var charsInString = {};
  stringInput = stringInput.split(' ').join('').split('');
  // separate each character into element of array


  var letterIndex;
  for (char of stringInput) {
    if (char in charsInString) {

      charsInString[char]["count"] += 1;
      charIndexList = charsInString[char]["indexList"];
      charIndexList.push(stringInput.indexOf(char, charIndexList[charIndexList.length - 1] + 1));
      console.log(charsInString[char]["indexList"] + " was increased.");
    }

    else {
      charsInString[char] = {};
      charsInString[char]["count"] = 1;
      charsInString[char]["indexList"] = [stringInput.indexOf(char)];
      console.log(charsInString[char]["indexList"] + " was added.");
    }
  }
  console.log(charsInString);
}

countLetters("hello world how goes");






// Send string to countLetters function
// Create empty object
// --
// Look at first letter
// If letter doesn't exist in object, add it.
// If letter already exist in object, increment count.
// Repeat for each letter
// -- or
// Look at first letter
// Add letter to object.
// Count instances of letter
// Remove letter from string
// Repeat for each letter
// --
// Return object
