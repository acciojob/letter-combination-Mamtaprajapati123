function letterCombinations(input_digit) {
  const digitToLetters = {
    0: '0',
    1: '1',
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  };

  function recurse(digits) {
    if (digits.length === 0) {
      return [''];
    }

    const currentDigit = digits[0];
    const remainingDigits = digits.slice(1);
    const letters = digitToLetters[currentDigit];
    const combinations = [];

    for (const letter of letters) {
      const suffixes = recurse(remainingDigits);

      for (const suffix of suffixes) {
        combinations.push(letter + suffix);
      }
    }

    return combinations;
  }

  return recurse(input_digit).sort();
}
