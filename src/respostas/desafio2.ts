// Como podemos melhorar o esse código usando TS?
enum Profissao {
	Programador,
	Desenhista,
	Pintor,
	Mecanico,
	Professor,
	atriz,
	padeiro
}

interface Ipessoa {
	nome: string;
	idade: number;
	profissao: Profissao;
}

let pessoa1: Ipessoa = {
	nome: "maria",
	idade: 29,
	profissao: Profissao.atriz
};

let pessoa2: Ipessoa = {
	nome: "roberto",
	idade: 19,
	profissao: Profissao.padeiro
};

let pessoa3: Ipessoa = {
	nome: "laura",
	idade: 32,
	profissao: Profissao.atriz
};

let pessoa4: Ipessoa = {
	nome: "Carlos",
	idade: 19,
	profissao: Profissao.padeiro
};
