import React, { useEffect, useState } from 'react'
import './App.css'
import Axios from 'axios'

const API_KEY = process.env.REACT_APP_API_KEY

function App() {
	const [city, setCity] = useState('')
	const [unit, setUnit] = useState('metric')
	const [data, setData] = useState(undefined)

	const cUnicode = `\u2103`
	const fUnicode = `\u2109`

	const changeInput = (e) => setCity(e.target.value)
	const radioChange = (e) => setUnit(e.target.value === 'celsius' ? 'metric' : 'imperial')

	const fetchData = (e) => {
		if (e !== undefined) e.preventDefault()
		if (city.trim().length < 1) return

		async function fetch() {
			try {
				const res = await Axios.get(
					`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${API_KEY}`
				)
				setData(res.data)
			} catch (error) {
				console.log(error)
			}
		}
		fetch()
	}

	useEffect(() => {
		fetchData(undefined)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [unit])

	return (
		<div className='background_container d-flex align-items-center flex-column'>
			<div className='h-25 d-flex jusitfy-content-center align-items-center '>
				<h1>Weather App</h1>
			</div>

			<div className='mb-3'>
				<p className='m-0'>Display temp in: </p>
				<div className='form-check form-check-inline mb-3' onChange={radioChange}>
					<input
						className='form-check-input'
						type='radio'
						name='inlineRadioOptions'
						id='inlineRadio1'
						value='celsius'
						defaultChecked={unit === 'metric'}
					/>
					<label className='form-check-label mr-4' htmlFor='inlineRadio1'>
						Celsius
					</label>

					<input
						className='form-check-input'
						type='radio'
						name='inlineRadioOptions'
						id='inlineRadio2'
						value='fahrenheit'
						defaultChecked={unit !== 'metric'}
					/>
					<label className='form-check-label' htmlFor='inlineRadio2'>
						Fahrenheit
					</label>
				</div>

				<form className='form-inline'>
					<input
						className='form-control mr-sm-2'
						type='search'
						placeholder='Search'
						aria-label='Search'
						onChange={changeInput}
					/>
					<button className='btn btn-outline-success my-2 my-sm-0' type='submit' onClick={fetchData}>
						Search
					</button>
				</form>
			</div>

			<div style={{ minWidth: '360px' }}>
				{data !== undefined && <h1>{data.name}</h1>}
				{data !== undefined && (
					<h3>
						{' '}
						{data.main.temp} {unit === 'metric' ? cUnicode : fUnicode}
						<span>
							{' '}
							(Feels like: {data !== undefined && data.main.feels_like}
							{unit === 'metric' ? cUnicode : fUnicode})
						</span>
					</h3>
				)}

				{data !== undefined && (
					<p>
						{' '}
						{data.weather[0].main}, {data.weather[0].description}
					</p>
				)}

				{data !== undefined && (
					<span>
						Lat: {data.coord.lat} Lng: {data.coord.lon}
					</span>
				)}

				{data !== undefined && (
					<div>
						<svg
							style={{ transform: `rotate(${data.wind.deg}deg)` }}
							width='1em'
							height='1em'
							viewBox='0 0 16 16'
							className='bi bi-arrow-up'
							fill='currentColor'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								fillRule='evenodd'
								d='M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z'
							/>
						</svg>
						<span>
							{data.wind.speed} {unit === 'metric' ? 'm/s' : 'mph'}{' '}
						</span>
					</div>
				)}
			</div>
		</div>
	)
}

export default App
