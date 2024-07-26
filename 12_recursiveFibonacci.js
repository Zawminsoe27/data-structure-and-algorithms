function recursiveFIbonacci(n) {
	if (n < 2) {
		return n
	}
	return recursiveFIbonacci(n - 1) + recursiveFIbonacci(n - 2)
}

console.log(recursiveFIbonacci(0))
console.log(recursiveFIbonacci(1))
console.log(recursiveFIbonacci(6))
console.log(recursiveFIbonacci(8))