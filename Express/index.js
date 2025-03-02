const express = require("express");
const app = express();
const port = 3000;

app.get("/api/:id", (req, res) => {

res.send('Hello World: ' + req.params.id) //Enviando um req.params 
 
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}!`);
});
