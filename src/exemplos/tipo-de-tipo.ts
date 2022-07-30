type Input = number | string;

function somarValores(input1: Input, input2: Input) {
	if (typeof input1 === "number" && typeof input2 === "number")
		return input1 + input2;
	return input1.toString() + input2.toString();
}

console.log(somarValores(1, 2));
console.log(somarValores("hello ", "world!"));
console.log(somarValores("hello ", 20));
