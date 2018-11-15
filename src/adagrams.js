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

    let indices_used = [];
    const max = this.letterPool.length - 1;

    for (let i=0; i < 10; i++) {
      let index = Math.floor(Math.random() * max);
      if (indices_used.includes(index)){
        index = Math.floor(Math.random() * max);
      } else {
        tenLetters.push(this.letterPool[index])
        indices_used.push(index)
      }
    }
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
    console.log('letterCountsInHand',letterCountsInHand)

    // same for input
    input.split().forEach((letter) => letterCountsInput[letter] = 0);
    // calculate frequency of lettersInInput
    input.split().forEach((letter) => letterCountsInput[letter] += 1);
    let answer
    input.split("").forEach((letter) => {
      let freqInput = letterCountsInput[letter]
      let freqInHand = letterCountsInHand[letter]
      // console.log('freqInHand', freqInput)
      console.log('freqInHand',freqInHand)
      if (freqInHand == undefined) {
        answer = false;
      } else if (freqInput > freqInHand) {
        answer = false;
      }
      answer = true;
    });
    // get value of frequency in
    return answer
  }
};

// Do not remove this line or your tests will break!
export default Adagrams;
