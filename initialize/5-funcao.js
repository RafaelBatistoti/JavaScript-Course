function somar(num1, num2) {
	return num1 + num2;
}

const outraFuncao = (num1, num2) => {
  return num1 + num2;
}

let num1 = 2;
let num2 = 2;

console.log("Function normal: " + somar(num1, num2));

console.log("Arrow function: " + outraFuncao(num1, num2));


