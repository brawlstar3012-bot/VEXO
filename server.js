const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("."));

app.post("/api/chat", (req, res) => {
    const message = req.body.message;

    if (!message) {
        return res.json({ reply: "Écris une question à VEXO !" });
    }

    res.json({
        reply: "VEXO a reçu ta question : " + message
    });
});

app.listen(3000, () => {
    console.log("VEXO est lancé sur http://localhost:3000");
});