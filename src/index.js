require('dotenv').config()

const express = require(`express`)
const knex = require(`./conexao`)
const cors = require('cors')


const app = express()

app.use(express.json())
app.use(cors())


app.get('/', async (req, res) => {
    try {
        const nomes = await knex('tabela_nomes')
        return res.status(200).json(`Anjinha❤️ Eu te Amo!!!`)
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
})
const PORT = process.env.PORT || 3000

app.listen(PORT)
