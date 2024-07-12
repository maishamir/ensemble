import express from "express";
const app = express();
const PORT = 3000

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Hellooo")
})

app.listen(PORT, (req, res) => {
    console.log(`listening on port ${PORT}`)
})