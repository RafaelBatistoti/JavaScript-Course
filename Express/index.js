const express = require("express");
const {
	apiSomar,
	apiSubtrair,
	apiMultiplicar,
	apiDividir,
} = require("./opracoes");
const app = express();
const port = 3000;
app.use(express.json());

app.get("/api/:id", (req, res) => {
	res.send("Hello World: " + req.params.id); //Enviando um req.params
});

app.post("/somar", apiSomar);
app.post("/subtrair", apiSubtrair);
app.post("/multiplicar", apiMultiplicar);
app.post("/dividir", apiDividir);

app.listen(port, () => {
	console.log(`Example app listening on port ${port}!`);
});
