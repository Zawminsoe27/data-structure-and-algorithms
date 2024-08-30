function bubbleSort(arr) {


	let swapped
	do {
		swapped = false
		for (let i = 0; i <= arr.length; i++) {
			if (arr[i] > arr[i + 1]) {
				let temp = arr[i]
				arr[i] = arr[i + 1]
				arr[i + 1] = temp
				swapped = true
			}
		}
	}
	while (swapped)
}
let array = [10, 8, 2, 45, 32, 53, 98. - 2, -30]
bubbleSort(array)
console.log(array)

// bigO = O(logn^2)