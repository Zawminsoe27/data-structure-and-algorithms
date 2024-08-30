class Quece {
	constructor() {
		this.item = []
	}

	enquece(element) {
		this.item.push(element)
	}
	dequece() {
		this.item.shift()
	}

	isEmpty() {
		return this.item.length === 0
	}
	peek() {
		if (!this.isEmpty) {
			return this.item[0]
		} else {
			return null
		}
	}
	size() {
		return this.item.length
	}
	print() {
		console.log(this.item.toString())
	}
}

const quece = new Quece()


quece.enquece(10)
quece.enquece(22)
quece.enquece(18)
quece.enquece(11)
quece.print()
console.log("Size of quece is ", quece.size())

quece.dequece()
setTimeout(() => {
	console.log("After dequece Size of quece is ", quece.size())
}, 1000)


setTimeout(() => {
	quece.print()
}, 1500)