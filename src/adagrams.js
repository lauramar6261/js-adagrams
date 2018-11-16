const Adagrams = {
    letterPool: [
      'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A',
      'B', 'B',
      'C', 'C',
      'D', 'D', 'D', 'D',
      'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E',
      'F', 'F',
      'G', 'G', 'G',
      'H', 'H',
      'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I',
      'J',
      'K',
      'L', 'L', 'L', 'L',
      'M', 'M',
      'N', 'N', 'N', 'N', 'N', 'N',
      'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O',
      'P', 'P',
      'Q',
      'R', 'R', 'R', 'R', 'R', 'R',
      'S', 'S', 'S', 'S',
      'T', 'T', 'T', 'T', 'T', 'T',
      'U', 'U', 'U', 'U',
      'V', 'V',
      'W', 'W',
      'X',
      'Y', 'Y',
      'Z'
    ],
  drawLetters() {
    const tenLetters = [];
    const tenNumbers = [];

    const max = this.letterPool.length - 1;

    // get 10 unique numbers = length 9 for 10 digits
    while (tenNumbers.length < 10) {
      let random = Math.floor(Math.random() * max);
      if (tenNumbers.includes(random)) {
        random = Math.floor(Math.random() * max);
      } else {
        tenNumbers.push(random)
      }
    }

    // use numbers to get 10 letters
    tenNumbers.forEach((num) => {
      let letter = this.letterPool[num]
      tenLetters.push(letter)
    });
    return tenLetters;
  },
  usesAvailableLetters(input, lettersInHand) {
    // console.log(lettersInHand)
    // console.log(input)
    let letterCountsInHand = { };
    let letterCountsInput = { };
    // create hash of lettersInHand
    lettersInHand.forEach((letter) => letterCountsInHand[letter] = 0);
    // calculate frequency of lettersInHand
    lettersInHand.forEach((letter) => letterCountsInHand[letter] += 1);
    // console.log('letterCountsInHand',letterCountsInHand)

    // same for input
    input.split("").forEach((letter) => letterCountsInput[letter] = 0);
    // calculate frequency of lettersInInput
    input.split("").forEach((letter) => letterCountsInput[letter] += 1);
    let answer
    input.split("").map((letter) => {
      let freqInput = letterCountsInput[letter]
      // console.log('freqInput',freqInput)
      let freqInHand = letterCountsInHand[letter]
      // console.log('freqInHand',freqInHand)
      if (freqInHand == undefined) {
        answer = false;
      } else if (freqInput > freqInHand) {
        answer = false;
      }
    });
    if (answer == false) {
      return answer
    } else {
      return true
    }
  },
  scoreWord(word) {
    let score = 0
    if (word.length == 10 || word.length == 7 || word.length == 8 || word.length == 9) {
      score += 8
    }
    const group1 = 'AEIOULNRST'
    const group2 = 'D G'
    const group3 = 'B C M P'
    const group4 = 'F H V W Y'
    const group5 = 'J X'
    const group6 = 'Q Z'

    word.toUpperCase().split('').map((letter) => {
      if (group1.includes(letter)) {
        score += 1;
      } else if (group2.includes(letter)) {
        score += 2;
      } else if (group3.includes(letter)) {
        score += 3;
      } else if (group4.includes(letter)) {
        score += 4;
      } else if (group5.includes(letter)) {
        score += 8;
      } else if (group6.includes(letter)) {
        score += 10;
      }
    });
  return score
  },

  highestScoreFrom(words) {
    let data = {}
    let winner = {}
    let shortestWord = words[0]
    let word10
    words.forEach((word) => {
      let score = this.scoreWord(word)
      data[word] = score
      if (word.length < shortestWord.length){
        shortestWord = word
      } else if (word.length == 10 ) {
        word10 = word
      }
    });


    let bestScore = Object.values(data).reduce((h, s) => h < s ? s : h, 0);
    let numTies = Object.values(data).filter((s) => s ==bestScore).length
    if (numTies == 1) {
      let winnerWord = Object.keys(data).reduce((a, b) => data[a] > data[b] ? a : b);
      winner = {"word": winnerWord, "score": data[winnerWord]}
    } else { // tied
      if ((word10 != undefined) && (shortestWord.length != 10 )){ // use word that is 10 chars
        winner = {"word": word10, "score": data[word10]}
      } else { //use shortestWord and first occurance
        winner = {"word": shortestWord, "score": data[shortestWord]}
      }
    }
  return winner
  }

};

// Do not remove this line or your tests will break!
export default Adagrams;
