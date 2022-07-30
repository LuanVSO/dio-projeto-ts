function somarValoresNumericos(num1: number, num2: number): number {
	return num1 + num2; //.toString();
}

function somarValoresNumericoseTratar(num1: number, num2: number, callback: (num: number) => number): number {
	return callback(num1 + num2);
}
console.log(somarValoresNumericos(1, 2));

function imprimirValores(num1: number, num2: number): void {
	console.log(num1 + num2);
}


function aoQuadrado(num: number): number {
	return num * num;
}

function to1(num: number) {
	return num / num;
}

console.log(somarValoresNumericoseTratar(1, 2, aoQuadrado));
console.log(somarValoresNumericoseTratar(1, 2, to1));
