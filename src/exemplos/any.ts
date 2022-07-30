let valorAny: any;
valorAny = 1;
valorAny = 'Hola';
valorAny = {};
valorAny = [];
valorAny = () => { };
valorAny = null;
valorAny = undefined;
valorAny = true;

let valorString: string = "teste";
valorString = valorAny;
let valorString2: string = "testao";
valorString2 = valorAny;

function somarString(str1: string, str2: string) {
	console.log(str1 + str2);
}

somarString(valorString, valorString2);
