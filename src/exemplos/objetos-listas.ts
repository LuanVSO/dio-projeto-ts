enum Profissão {
	Programador,
	Desenhista,
	Pintor,
	Mecanico,
	Professor
}

class Pessoa {
	nome!: string;
	idade!: number;
	profissão?: Profissão;
}


const vanessa: Pessoa = {
	nome: "vanessa",
	idade: 30,
	profissão: Profissão.Programador
};

class Estudante extends Pessoa {
	materias!: string[];
}

const jessica: Estudante = {
	nome: "Jessica",
	idade: 20,
	materias: ["html", "css", "javascript"]
};

function listar(lista: string[]) {
	for (const item of lista) {
		console.log("- ", item);
	}
}

listar(jessica.materias);
