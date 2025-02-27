
const media = (par1, par2, par3) => {
  return (par1 + par2 + par3) / 3
}

const notaPrimeiroSemestre = -1;
const notaSegundoSemestre = -2;
const notaFinal = -5;

const resultadoMedia =media(notaPrimeiroSemestre, notaSegundoSemestre, notaFinal)

if (resultadoMedia <= 3.0) console.log(`${resultadoMedia}: Horrivel!!` );
else if (resultadoMedia > 3.0 && resultadoMedia <= 7.0) console.log(`${resultadoMedia}: Da pra melhorar`);
else console.log(`${resultadoMedia}: Excelente!!` );
