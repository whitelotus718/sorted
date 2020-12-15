// Implement Selection Sort

// Implement swap without looking at bubble sort
function swap(arr, index1, index2) {
	const value1 = arr[index1],
		value2 = arr[index2]
	arr[index1] = value2
	arr[index2] = value1
	//![arr[index2], arr[index1]] = [arr[index1], arr[index2]] //! Why doesnt this work?
}

//* [5, 2, 4, 3, 1]  i==0, j==1, current smallest = 5, index 0
//*     ^
//* [5, 2, 4, 3, 1]  i==0, j==2, current smallest = 2, index 1
//*        ^
//.......
//* [5, 2, 4, 3, 1]  i==0, j==4, current smallest = 2, index 1
//*              ^
//* [5, 2, 4, 3, 1]  i==0, j==4, current smallest = 1, index 4
//*              ^
//* [1, 2, 4, 3, 5]  i==1, j==4, current smallest = 2, index 1
//*        ^

function selectionSort(list) {
	let n = list.length
	for (let i = 0; i < n - 1; i++) {
		minIndex = i
		for (let j = i + 1; j < n; j++) {
			if (list[j] < list[minIndex]) {
				minIndex = j
			}
		}
		if (minIndex !== i) {
			swap(list, minIndex, i)
		}
	}
}
let array = [5, 4, 3, 2, 1]
selectionSort(array)
console.log(array)
module.exports = {
	selectionSort,
	swap,
}
