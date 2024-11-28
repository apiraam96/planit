const express = require("express")
const cors = require("cors")
const app = express();

const PORT = 3000

app.use(cors())
//parse incoming requests with JSON payload and makes it available in the req.body
app.use(express.json())

app.get("/api/login", (req, res) => {
    res.json({message: "logged in"})
})


//Routes
const authRouter = require("./routes/authRouter.js")
app.use("/api/logging", authRouter)

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})