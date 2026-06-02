const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const musicaRoutes = require("./routes/musicaRoutes");
app.use("/musicas", musicaRoutes);

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});