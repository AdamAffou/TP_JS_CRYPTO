const express = require('express')
const axios = require('axios')
const cors = require('cors')
const app = express()
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())
const port = 3000

app.get('/0/public/Assets',async (req, res) => {
    const data = await axios.get('https://api.kraken.com/0/public/Assets').then(axiosResponse => axiosResponse.data)
    res.json(data)
})

app.get('/0/public/AssetPairs', async (req, res) => {
    const data = await axios.get('https://api.kraken.com/0/public/AssetPairs').then(axiosResponse => axiosResponse.data)
    res.json(data)
})

app.post('/0/public/Ticker', async (req, res) => {
    const params = req.body
    const data = await axios.post('https://api.kraken.com/0/public/Ticker',params).then(axiosResponse => axiosResponse.data)
    res.json(data)
})

app.listen(port, () => {
  console.log(`Vous pouvez faire vos requêtes ! http://localhost:${port}`)
})