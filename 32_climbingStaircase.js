function climbingStaircase(n) {
	const noOfWays = [1, 2]
	for (i = 2; i <= n; i++) {
		noOfWays[i] = noOfWays[i - 1] + noOfWays[i - 2]
	}
	return noOfWays[n - 1]
}

console.log(climbingStaircase(1))
console.log(climbingStaircase(2))
console.log(climbingStaircase(5))
console.log(climbingStaircase(8))
console.log(climbingStaircase(10))
console.log(climbingStaircase(24))
console.log("\nBig-O = O(n)")
