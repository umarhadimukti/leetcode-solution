function findTheDifference(s, t)  {
  let tempS = [...s]
  tempS.sort()
  tempS = tempS.join('')
  let tempT = [...t]
  tempT.sort()
  tempT = tempT.join('')
  console.log(tempS, tempT)

  for (let i = 0; i < s.length; i++) {
    if (tempS[i] !== tempT[i]) {
      return tempT[i]
    }
  }
  
  return tempT[t.length-1]
}

console.log(findTheDifference('umar', 'umar'))