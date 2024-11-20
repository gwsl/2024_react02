import React from 'react';

function Tempinput({value, unit, onChange}) {
  return (
    <div>
      <input type='text' 
        value={value}
        onChange={(e)=>onChange(e.target.value)}
        placeholder={`In ${unit}`} /> 
      
      <span>{unit}</span>
    </div>
  );
}

export default Tempinput;