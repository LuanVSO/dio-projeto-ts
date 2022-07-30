function add(n1: number, n2: number) {
	return n1 + n2;
}

function loggerMonad<U>(str: string, func: (...args: U[]) => U, ...args: U[]): U {
	let result = func(...args);
	console.log(str, func, "args:", ...args, "result:", result);
	return result;
}

function loggerWrapper<U>(str: string, func: (...args: U[]) => U): (...args: U[]) => U {
	return (...args: U[]) => loggerMonad(str, func, ...args);
}

function main() {
	let input1 = document.querySelector('#input1') as HTMLInputElement;
	let input2 = document.querySelector('#input2') as HTMLInputElement;
	let button = document.querySelector('#button') as HTMLButtonElement;
	let result = document.querySelector('#result') as HTMLSpanElement;
	let loggedAdd = loggerWrapper("add", add);
	if (!(button && input1 && input2 && result)) return;

	button.addEventListener('click', () => result.textContent = String(loggedAdd(Number(input1.value), Number(input2.value))));
}

main();
