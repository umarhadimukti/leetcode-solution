const isPalindrome = function(x) {
  // ubah integer menjadi string
  let convertNum = x.toString()
  // ambil pointer kiri
  let leftPointer = 0
  // ambil pointer kanan
  let rightPointer = convertNum.length - 1

  // looping selama pointer kiri < pointer kanan
  while(leftPointer < rightPointer) {
      // cek kalau nilai kiri dan kanan tidak sama, maka return false
      if (convertNum[leftPointer] !== convertNum[rightPointer]) {
          return false
      }

      // increment pointer kiri
      leftPointer++;
      // decrement pointer kanan
      rightPointer--;
  }

  return true
};