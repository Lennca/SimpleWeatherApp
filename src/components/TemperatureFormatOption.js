import React from 'react';

function TemperatureFormatOption({ radioChange, unit }) {
  return (
    <div>
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
    </div>
  );
}

export default TemperatureFormatOption;