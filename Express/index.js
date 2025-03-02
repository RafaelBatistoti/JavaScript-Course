const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());

const somar = (num1, num2) => {
	return num1 + num2;
};

app.get("/api/:id", (req, res) => {
	res.send("Hello World: " + req.params.id); //Enviando um req.params
});

app.post("/somar", (req, res) => {
	const { num1, num2 } = req.body;
	const result = somar(num1, num2);
	res.status(200).send({result});
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}!`);
});
