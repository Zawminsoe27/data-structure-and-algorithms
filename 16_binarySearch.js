function binarySearch(arr, target) {
	let rightIndex = arr.length - 1
	let leftIndex = 0

	while (leftIndex <= rightIndex) {
	let middleElement = Math.floor((leftIndex + rightIndex) /2)
	if(target === arr[middleElement]){
		return middleElement
	}
	if(target < arr[middleElement]){
		rightIndex = middleElement -1
	}
	else{
		leftIndex = middleElement +1
	}
	}
	return -1
}

console.log(binarySearch([1,2,3,4,5],3))
console.log(binarySearch([1,2,3,4,5],4))
console.log(binarySearch([1,2,3,4,5],8))