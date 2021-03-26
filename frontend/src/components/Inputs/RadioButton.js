import React from 'react';

function RadioButton({unit, selectedUnit, radioChange, type}) {
  const translateUnit = unit === 'metric' ? 'Celsius' : 'Fahrenheit'
  const name = `radio${translateUnit}`
  return (
    <div>
      <input
				className='form-check-input'
				type='radio'
				name={name}
				id={name}
				value={translateUnit.toLowerCase()}
				checked={selectedUnit === unit}
        onChange={radioChange}
      />
			<label className='form-check-label mr-3' htmlFor={name}>{translateUnit}</label>
    </div>
  );
}

export default RadioButton;