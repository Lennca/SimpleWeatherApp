import React from 'react';
import WindDirectionIcon from './WindDirectionIcon';

function ResultComponent({ data, unit }) {
  const cUnicode = `\u2103`
	const fUnicode = `\u2109`

  const { name } = data
  const { temp, feels_like } = data.main
  const { main, description } = data.weather[0]
  const { lat, lon } = data.coord
  const { speed, deg } = data.wind

  return (
    <div className="centered d-flex flex-column align-items-center">
			<h2>{name}</h2>
      <div className="d-flex flex-column">
        <h2 className="mr-3" style={{fontSize: '8rem'}}>
          {temp} <span style={{fontSize: '2rem'}}>{unit === 'metric' ? cUnicode : fUnicode}</span>
        </h2>
      </div>
      <h3>
        (Feels like: {data !== undefined && feels_like}
        {unit === 'metric' ? cUnicode : fUnicode})
      </h3>

			<p>{main}, {description}</p>
			<p>Lat: {lat} Lng: {lon}</p>

      <p><span><WindDirectionIcon deg={deg}/></span>{speed} {unit === 'metric' ? 'm/s' : 'mph'}</p>

		</div>
  );
}

export default ResultComponent;