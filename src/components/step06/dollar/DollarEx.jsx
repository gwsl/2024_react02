import React, { useState } from 'react';
import Dollarinput from './Dollarinput';
import DollarRadio from './DollarRadio';

function DollarEx() {
  const [unit, setUnit] = useState("Dollar")
  const [money, setMoney] = useState("")
  const convertedMoney = (unit === "Dollar")
    ? (money * 1400).toFixed(1)
    : (money * 1/1400).toFixed(1)
  return (
    <div>
      <h2>원 / 달라 변환기</h2>
      <p>
        Converted : {money ? convertedMoney : "--"}&nbsp;
        {unit === "Dollar" ? "원" : "$"}
      </p>
      <Dollarinput
        value={money}
        unit={unit}
        onChange={setMoney}
      />

      <DollarRadio
        unit={unit}
        onUnitChange={setUnit}
      />
    </div>
  );
}

export default DollarEx;