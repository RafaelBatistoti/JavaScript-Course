const criaTabuada = numero => {
	const resultadoTabuada =[];
	for (let index = 0; index <= 10; index++) {
		resultadoTabuada.push(index + " x " + numero + " = " + numero * index);
	}

	return resultadoTabuada;
};

const resultTabuada = criaTabuada(8);
console.log(resultTabuada);
