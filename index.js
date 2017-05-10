function add(a, b) {
	if (a === null || b === null || a === undefined || b === undefined) {
		throw new Error("added null or undefined")
	} else if (Number.isFinite(a) && Number.isFinite(b)){
		return a + b
	}
	// else {
	//	throw new Error("added non numbers")
	//}
}

module.exports.add = add