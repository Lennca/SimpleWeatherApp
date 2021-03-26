import React from 'react';
import RadioButton from './Inputs/RadioButton';

function TemperatureFormatOption({ radioChange, selectedUnit, metric, imperial }) {
  return (
    <div id="temperature-format-option-component" className="d-flex flex-column flex-md-row">
      	<p className='m-0 mr-3'>Display temperature in: </p>
				<div className='form-check form-check-inline'>
        <RadioButton unit={metric} selectedUnit={selectedUnit} radioChange={radioChange} />
        <RadioButton unit={imperial} selectedUnit={selectedUnit} radioChange={radioChange} />
				</div>
    </div>
  );
}

export default TemperatureFormatOption;