const somar = (num1, num2) => {
	if (isNaN(num1) || isNaN(num2))
		throw new Error("invalid!! Inform only numbers!!");

	return num1 + num2;
};

const subtrair = (num1, num2) => {
	if (isNaN(num1) || isNaN(num2))
		throw new Error("invalid!! Inform only numbers!!");
	return num1 - num2;
};

const multiplicar = (num1, num2) => {
	if (isNaN(num1) || isNaN(num2))
		throw new Error("invalid!! Inform only numbers!!");
	return num1 * num2;
};

const dividir = (num1, num2) => {
	if (isNaN(num1) || isNaN(num2))
		throw new Error("invalid!! Inform only numbers!!");

	if (num1 == 0 && num2 == 0) throw new Error("Is not divid by zero ('0')");
	return num1 / num2;
};

module.exports = { somar, subtrair, multiplicar, dividir };
