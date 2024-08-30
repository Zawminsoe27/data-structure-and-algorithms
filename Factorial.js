function factorial(n) {
	let num = 1
	for (i = 2; i <= n; i++) {
		console.log(`${num} * ${i}`)
		num = num * i
		console.log(`${num}\n`)
	}
	return num
}
console.log(`The result of factorial is `, factorial(5))
