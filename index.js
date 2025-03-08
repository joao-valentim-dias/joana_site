const express = require("express");
const path = require("path");

const app = express();

// Servir arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, "public")));

app.listen(7777, () => {
    console.log('Server started at http://localhost:7777');
});
