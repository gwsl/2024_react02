import React from 'react';

function DollarRadio({unit, onUnitChange}) {
  return (
    <div>
      <label>
        <input type='radio'
          value='Dollar'
          checked={unit === 'Dollar'}
          onChange={(e)=>onUnitChange(e.target.value)}
        />Dollar
      </label>
      <label>
        <input type='radio' 
          value='원'
          checked={unit === '원'}
          onChange={e=>onUnitChange(e.target.value)}
        />원
      </label>
    </div>
  );
}

export default DollarRadio;