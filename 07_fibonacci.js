function fibonacci(n) {
	let num = [0, 1]
	for (let i = 2; i < n; i++) {
		num[i] = num[i - 1] + num[i - 2]
	}
	return num
}
console.log(fibonacci(7))