function countLetters(stringInput) {
  var letterCount = {};
  stringInput = stringInput.split(' ').join('').split('');
  // separate each character into element of array

  for (char of stringInput) {
    if (char in letterCount) {
      letterCount[char] += 1;
      console.log(letterCount[char] + " was added");
    }

    else {
      letterCount[char] = 1;
      console.log(letterCount[char] + " was increased");
    }
  }
  console.log(letterCount);
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
