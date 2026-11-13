import express from "express";
import { fileURLToPath } from "node:url";

const app = express();
app.set("view engine", "ejs");
app.set("views", fileURLToPath(new URL("./views/", import.meta.url)));
app.use(express.json());

const citations = [
    { id: 1, texte: "Apprendre en pratiquant.", auteur: "Équipe du TP" },
];
let prochainId = 2;

app.get("/", (req, res) => {
    res.render("index", { citations });
});

app.get("/ping", (req, res) => {
    res.type("text/plain").send("Serveur de citations prêt.");
});

app.get("/citations", (req, res) => {
    res.json(citations);
});

app.get("/citations/:id", (req, res) => {
    // TODO : convertir l’ID en nombre, chercher la citation et gérer son absence.
    const id = Number(req.params.id);
    const citation = citations.find((c) => c.id === id);

    res.json(citation);
    res.status(501).json({ message: "À compléter" });
});

app.post("/citations", (req, res) => {
    // TODO : valider req.body, créer une citation et incrémenter prochainId.
    const citation = {
        id: prochainId,
        texte: req.body.texte,
        auteur: req.body.auteur,
    };

    citations.push(citation);
    prochainId++;

    res.json(citation);
    res.status(501).json({ message: "À compléter" });
});

app.put("/citations/:id", (req, res) => {
    const citation = citations.find((c) => c.id == req.params.id);
    citation.texte = req.body.texte;
    citation.auteur = req.body.auteur;

    res.json(citation);
});

app.delete("/citations/:id", (req, res) => {
    const citation = citations.find((c) => c.id == req.params.id);
    citations.splice(citations.indexOf(citation), 1);

    res.json({ message: "Citation supprimée" });
});
app.listen(3000, () => {
    console.log("API disponible sur http://localhost:3000");
});
