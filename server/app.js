import express from 'express'
import cors from 'cors'
import movieRoute from './routes/movies.js'

const app = express()
const PORT = 3000
app.use(express.json())
app.use(cors())
app.use('/movies', movieRoute)


app.get('/', (req, res) => {
    return res.send("hello from route")
})

app.listen(PORT, () => {
    console.log("server running....")
})