const express = require("express");
const {
	apiSomar,
	apiSubtrair,
	apiMultiplicar,
	apiDividir,
	hello,
} = require("./opracoes");
const app = express();
const port = 3000;
app.use(express.json());

app.get("/api/:id",hello)
app.post("/somar", apiSomar);
app.post("/subtrair", apiSubtrair);
app.post("/multiplicar", apiMultiplicar);
app.post("/dividir", apiDividir);

app.listen(port, () => {
	console.log(`Example app listening on port ${port}!`);
});
