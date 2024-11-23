import express from "express"
import cors from "cors"
const app = express();

const PORT = 3000

app.use(cors())

app.get("/api/login", (req, res) => {
    res.json({message: "logged in"})
})

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})