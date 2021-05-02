import axios from 'axios'
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000
const API_KEY = process.env.WEATHER_API_KEY

app.use(cors())
app.options('*', cors())

app.get('/api/weather/:city/:unit', async(req, res) => {
  const {city, unit} = req.params

  try {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${API_KEY}`
    const response = await axios.get(url)

    return res.status(200).json(response.data)
  } catch (error) {
    return res.status(500)
  }
})

app.use((req, res, next) => {
  res.status(404).send({
    status: 404,
    error: 'Not found'
  })
})

app.listen(PORT, () => console.log(`Server listening on port ${PORT}...`))