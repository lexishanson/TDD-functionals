var filterOutFunction = (n) => {
  const capturedN = n;
  return (array, i) => {
    return array[i]!== capturedN;
  }
}

function getAllElementsButNth(array, n) {
  const filterOutNFunction = filterOutFunction(n);
  return array.filter(filterOutNFunction);
}



