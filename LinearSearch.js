function linearSearch(arr, target) {
	for(i = 0; i< arr.length; i++){
		if(arr[i] === target){
			return i
		}}
			return -1
		
	}

console.log(linearSearch([11,15,7,8,4,20,5,9], 5))
console.log(linearSearch([11,15,7,8,4,20,5,9], 7));
console.log(linearSearch([11,15,7,8,4,20,5,9], 2));