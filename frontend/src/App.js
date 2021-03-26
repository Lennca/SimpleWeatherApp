import React, { useState } from 'react'
import Axios from 'axios'
import TemperatureFormatOption from './components/TemperatureFormatOption'
import SearchForm from './components/SearchForm'
import ResultComponent from './components/ResultComponent'

function App() {
  const metric = 'metric'
  const imperial = 'imperial'

	const [city, setCity] = useState('')
	const [selectedUnit, setselectedUnit] = useState(metric)
  const [tempMetric, setTempMetric] = useState(undefined)
  const [tempImperial, setTempImperial] = useState(undefined)

	const changeInput = (e) => setCity(e.target.value)
	const radioChange = (e) => setselectedUnit(e.target.value === 'celsius' ? metric : imperial)

  async function fetch(city, unit) {
    const url = `http://localhost:3001/api/weather/${city}/${unit}`
    const response = await Axios.get(url)
    return response
  }

  const fetchData = async(e) => {
    e.preventDefault()
    
    // simple input error handling
    if(city === undefined || city == null || city.trim().length < 1) return

    try {
      const result = await Promise.all([fetch(city, metric), fetch(city, imperial)])

      if(result[0].status === 200 && result[1].status === 200) {
        setTempMetric(result[0].data)
        setTempImperial(result[1].data)
      } else {
        throw new Error('Status code indicate on invalid response!')
      }
    } catch (error) {
      console.log('Error! Could not fetch.', error.message)
    }
  }

	return (
		<div className='background_container'>
			<div className="container">
        <div className="section-search">
          <SearchForm changeInput={changeInput} fetchData={fetchData} />
          <TemperatureFormatOption metric={metric} imperial={imperial} radioChange={radioChange} selectedUnit={selectedUnit} />
        </div>
        <div className="section-result">
        {tempMetric !== undefined && tempImperial !== undefined && (
          <ResultComponent data={selectedUnit === metric ? tempMetric : tempImperial} selectedUnit={selectedUnit} />
        )}
        </div>
      </div>
		</div>
	)
}

export default App
