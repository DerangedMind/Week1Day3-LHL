function countLetters(stringInput) {
  var letterCount = {};
  stringInput = stringInput.split(' ').join('').split('');

  for (var char of stringInput) {
    if (char in letterCount) {
      letterCount[char] += 1;
    }
    else {
      letterCount[char] = 1;
    }
  }
}

countLetters("hello world how goes");