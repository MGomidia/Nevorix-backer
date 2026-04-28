const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Servidor NEVORIX online 🚀");
});

app.post("/chat", (req, res) => {
  const mensagem = req.body.mensagem;

  let resposta = "Não entendi o que você disse.";

  if (!mensagem) {
    return res.json({ resposta: "Envie uma mensagem válida." });
  }

  const texto = mensagem.toLowerCase();

  if (texto.includes("oi")) {
    resposta = "Olá, comandante 👊";
  }

  if (texto.includes("hora")) {
    resposta = "Agora são " + new Date().toLocaleTimeString();
  }

  if (texto.includes("data")) {
    resposta = "Hoje é " + new Date().toLocaleDateString();
  }

  if (texto.includes("nome")) {
    resposta = "Eu sou a NEVORIX, sua inteligência avançada.";
  }

  res.json({ resposta });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Servidor rodando na porta " + PORT);
});
