// Implement Bubble Sort
// 


function swap(array, idx1, idx2) {
  let temp = array[idx1];
  array[idx1] = array[idx2];
  array[idx2] = temp;
  console.log(array)
}

const arr1 = [3,4,1,5,2]
bubbleSort(arr1)

function bubbleSort(array) {
  let isSorted = false; // is undefined falsey?
  while (!isSorted) {
    for (let i=0; i <= array.length - 2; i++){
      console.log(i)
      if (array[i] > array[i + 1]) {
        console.log("testing")
        swap(array, i, i+1)
        break
      } 
      if (i === array.length - 2) {
        isSorted = true;
      }
    }
  }
}

module.exports = {
  bubbleSort,
  swap
};
