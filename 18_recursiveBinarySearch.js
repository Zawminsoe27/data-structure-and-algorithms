function recursiveBinarySearch(arr, target){
return search(arr, target, 0, target.length-1)
}

function search(arr, target, leftInd, rightInd){
	if(leftInd > rightInd ){
		return -1
	}
}

console.log(recursiveBinarySearch ([1,2,54,32,63,12,3],32))
console.log(recursiveBinarySearch ([1,2,54,32,63,12,3],52))
console.log(recursiveBinarySearch ([1,2,54,32,63,12,3],42))