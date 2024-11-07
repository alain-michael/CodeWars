function addDigits(str) {
  let num = str.split("").splice(1).reduce((acc, curr) => acc + parseInt(curr), parseInt(str[0]));
  return num
}

function equalDiff(a, b) {
  let i = 0
  while (a[i] === b[i]) {
    if(a[i] === undefined && b[i] === undefined) {
      return 1;
    }
    i++;
  }
    if(a[i] === undefined && b[i] !== undefined) {
      console.log('neg one', a[i] === undefined, b[i] === undefined, a, b)
      return -1;
    }
    else if(a[i] !== undefined && b[i] === undefined) {
      console.log('pos one', a[i], b[i], a, b)
      return 1;
}
    return a[i] - b[i]
}

function orderWeight(strng) {
    let arrNumbers = strng.split(" ")
    arrNumbers.sort((a, b) => {
       let diff = addDigits(a) - addDigits(b)
      return (diff == 0 ? equalDiff(a, b) : diff)
    });
  return arrNumbers.join(" ");
}
