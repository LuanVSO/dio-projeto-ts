let any: any;
any = 5;

let stringTest: string = 'verificar';

stringTest = any;

let desconhecido: unknown;

desconhecido = 3;
desconhecido = 'teste';
desconhecido = true;
desconhecido = "house";
let stringTest2: string = 'GG';

if (typeof desconhecido === 'string') {
	stringTest2 = desconhecido;
}

function throwErr(erro: string, código: number): never {
	throw { error: erro, code: código };
}

throwErr("putz", 55);
