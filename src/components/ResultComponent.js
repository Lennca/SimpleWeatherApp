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
    <div style={{ minWidth: '360px' }}>
			<h3>{name}</h3>
			<h3>
				{temp} {unit === 'metric' ? cUnicode : fUnicode}
				<span>
					(Feels like: {data !== undefined && feels_like}
					{unit === 'metric' ? cUnicode : fUnicode})
				</span>
			</h3>

			<p>{main}, {description}</p>
			<span>Lat: {lat} Lng: {lon}</span>

			<div>
				<WindDirectionIcon deg={deg} />
				<span>{speed} {unit === 'metric' ? 'm/s' : 'mph'}</span>
			</div>
		</div>
  );
}

export default ResultComponent;