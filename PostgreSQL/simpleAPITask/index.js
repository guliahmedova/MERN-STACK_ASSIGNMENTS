const express = require('express')
const dotenv = require('dotenv')
const appRouter = require('./routes')

dotenv.config()

const PORT = process.env.PORT || 3030

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use('/api', appRouter)


app.listen(PORT, () => {
    console.log(`Server listening PORT:${PORT}`);
})