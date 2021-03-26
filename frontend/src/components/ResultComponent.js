import React from 'react';
import WindDirectionIcon from './WindDirectionIcon';

function ResultComponent({ data, selectedUnit }) {
  const cUnicode = `\u2103`
	const fUnicode = `\u2109`

  const unitOfSpeed = selectedUnit === 'metric' ? 'm/s' : 'mph'
  const unitOfTemp = selectedUnit === 'metric' ? cUnicode : fUnicode

  const { name } = data
  const { temp, feels_like } = data.main
  const { main, description } = data.weather[0]
  const { lat, lon } = data.coord
  const { speed, deg } = data.wind

  return (
    <div id="result-component">
			<h2>{name}</h2>
      <h2 id="temperature"> {temp} <span id="unicodeTag">{unitOfTemp}</span> </h2>
      <h3>(Feels like: {feels_like}{unitOfTemp})</h3>
			<p>{main}, {description}</p>
			<p>Lat: {lat} Lng: {lon}</p>
      <p><span><WindDirectionIcon deg={deg}/></span>{speed} {unitOfSpeed}</p>
		</div>
  );
}

export default ResultComponent;