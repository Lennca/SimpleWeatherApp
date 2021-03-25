import React, { useState } from 'react'
import './App.css'
import Axios from 'axios'
import TemperatureFormatOption from './components/TemperatureFormatOption'
import SearchForm from './components/SearchForm'
import ResultComponent from './components/ResultComponent'

const API_KEY = process.env.REACT_APP_API_KEY

function App() {
  const metric = 'metric'
  const imperial = 'imperial'

	const [city, setCity] = useState('')
	const [unit, setUnit] = useState(metric)
  const [tempMetric, setTempMetric] = useState(undefined)
  const [tempImperial, setTempImperial] = useState(undefined)

	const changeInput = (e) => setCity(e.target.value)
	const radioChange = (e) => setUnit(e.target.value === 'celsius' ? metric : imperial)

  async function fetch(unit) {
    const response = await Axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${API_KEY}`
    )
    return response
  }

  const fetchData = async(e) => {
    e.preventDefault()
    
    // simple input error handling
    if(city === undefined || city == null || city.trim().length < 1) return

    try {
      const result = await Promise.all([fetch(metric), fetch(imperial)])

      setTempMetric(result[0].data)
      setTempImperial(result[1].data)
    } catch (error) {
      console.log('Error! Could not fetch.', error.message)
    }
  }

	return (
		<div className='background_container'>
			<div className="container">
        <div className='h-25 d-flex jusitfy-content-center align-items-center '>
          <h1 style={{fontSize: '3rem'}}>Weather App</h1>
        </div>

        <div className='mb-3'>
          <TemperatureFormatOption radioChange={radioChange} unit={unit} />
          <SearchForm changeInput={changeInput} fetchData={fetchData} />
        </div>

        {tempMetric !== undefined && tempImperial !== undefined && (
          <ResultComponent data={unit === metric ? tempMetric : tempImperial} unit={unit} />
        )}
      </div>
		</div>
	)
}

export default App
