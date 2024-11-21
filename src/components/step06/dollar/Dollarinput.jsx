import React from 'react';

function Dollarinput({value, unit, onChange}) {
  return (
    <div>
      <input type='text'
        value={value}
        onChange={e=>onChange(e.target.value)}
        placeholder={`In ${unit}`}
      />
      <span>{unit}</span>
    </div>
  );
}

export default Dollarinput;