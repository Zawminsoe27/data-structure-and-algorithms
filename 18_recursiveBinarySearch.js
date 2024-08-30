function recursiveBinarySearch(arr, target){
return search(arr, target, 0, arr.length-1)
}

function search(arr, target, leftInd, rightInd){
	if(leftInd > rightInd ){
		return -1
	}
	let middleIndex = Math.floor((leftInd + rightInd /2))
	if(target === arr[middleIndex]) {
		return middleIndex
	}
	if(target < arr[middleIndex]){
		return search(arr, target, leftInd, middleIndex-1 )
	} else {
		return search(arr, target, middleIndex+1,rightInd)
	}

}

console.log(recursiveBinarySearch ([1,2,54,32,63,12,3],32))
console.log(recursiveBinarySearch ([1,2,54,32,63,12,3],52))
console.log(recursiveBinarySearch ([1,2,54,32,63,12,3],42))