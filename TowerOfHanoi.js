function towerOfHanoi(n, fromRod, toRod, usingRod) {
	if (n === 1){
		console.log(`Move 1 disk from ${fromRod} to ${toRod}.`)
		return
	}
	towerOfHanoi(n-1, fromRod, usingRod, toRod)
	console.log(`move disk ${n} from ${fromRod} to ${toRod}.`)
	towerOfHanoi(n-1, usingRod, toRod, fromRod)
}
towerOfHanoi(3, "A", "C", "B")

console.log("\n Big-O = 2^n")