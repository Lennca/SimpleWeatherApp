import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Axios from 'axios';

//require("dotenv").config()

function App() {
  const [city, setCity] = useState("")
  const [useCelsius, setUseCelsius] = useState(true)
  const [data, setData] = useState(undefined)


  //console.log(process.env.REACT_APP_API_KEY)
  const API_KEY = process.env.REACT_APP_API_KEY

  const changeInput = ((e) => {
    setCity(e.target.value)
  })

  const fetchData = (e) => {
    e.preventDefault()
    async function fetch() {
      try {
        console.log("c: " + city)
        const res = await Axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`)
        setData(res.data)
        console.log(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetch()
    // Make query city, country, metrics (units / fahrenheit)
    // Fetch data from api
    // State = place
    // State = weather?
  }

  return (
    <div className="background_container d-flex justify-content-center align-items-center flex-column">
      <h1>Weather App</h1>

      <div>
        <form class="form-inline">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={changeInput}/>
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={fetchData}>Search</button>
        </form>

        <div>
          <h1>City: {data!=undefined && data.name}</h1>{/** .name */}
          <h1>Temp: {data!=undefined && data.main.temp} &#8451;</h1>{/** .main.temp */}
          <h3>Feels like: {data!=undefined && data.main.feels_like} &#8451;</h3>{/** .main.feels_like */}

          <span>Lat: {data!=undefined && data.coord.lat} Lng: {data!=undefined && data.coord.lon}</span>{/** .coord.lon */}
          <span></span>{/** .coord.lng */}

        </div>

      </div>

    </div>
  );
}

export default App;
