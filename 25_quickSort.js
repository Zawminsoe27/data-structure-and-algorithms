// function quickSort(arr) {
// 	if (arr.length < 2) {
// 		return arr
// 	}
// 	let pivot = arr[arr.length - 1]
// 	let left = []
// 	let right = []

// 	for (i = 0; i < arr.length - 1; i++) {
// 		if (arr[i] < pivot) {
// 			left.push(arr[i])
// 		} else {
// 			right.push(arr[i])
// 		}
// 	}

// 	return [...quickSort(left), pivot, ...quickSort(right)]
// }

// let arr = [1, 9, 39, 34, 2, 3, 23, 53, 64]

// console.log(quickSort(arr))


// function quickSort(arr) {
// 	if (arr.length < 2) {
// 		return arr
// 	}


// 	let povit = arr[arr.length - 1]
// 	let left = []
// 	let right = []
// console.log("Povit is ", povit)
// console.log(arr)
// 	for (i = 0; i < arr.length - 1; i++) {
// 		if (arr[i] < povit) {
// 			left.push(arr[i])
// 			console.log("Push at left ", arr[i])
// 		} else {
// 			right.push(arr[i])
// 			console.log("Push at right ", arr[i])

// 		}
// 	}
// 	return [...quickSort(left), povit, ...quickSort(right)]
// }

// let arr = [1, 9, 39, 34, 2, 3, 23, 53, 64]
// console.log(quickSort(arr))

function quickSort(arr) {
	if (arr.length < 2) {
		return arr
	}

	let povit = arr[arr.length - 1];
	let left = []
	let right = []

	for (i = 0; i < arr.length - 1; i++) {

		if (arr[i] < povit) {
			left.push(arr[i])
		} else {
			right.push(arr[i])
		}
	}

	return [...quickSort(left), povit, ...quickSort(right)]
}


let arr = [1, 9, 39, 34, 2, 3, 23, 53, 64]
console.log(quickSort(arr))