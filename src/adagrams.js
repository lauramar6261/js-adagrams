const Adagrams = {
  drawLetters() {
    let letterPool = [
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
    ];
    const tenLetters = [];

    let indices_used = [];
    const max = letterPool.length - 1;
    for (let i=0; i < 10; i++) {
      let index = Math.floor(Math.random() * max);
      if (indices_used.includes(index)){
        index = Math.floor(Math.random() * max);
      } else {
        console.log(index)
        tenLetters.push(letterPool[index])
        indices_used.push(index)
      }
    }
    return tenLetters;
  },
};

// Do not remove this line or your tests will break!
export default Adagrams;
