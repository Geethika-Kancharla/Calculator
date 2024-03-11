import React, { useState } from 'react'
import Calculator from './Components/Calculator'
import './App.css'

export default function App() {

  const [calc, setCalc] = useState({
    current: "0",
    total: "0",
    isInitial: true,
    preOp: ""
  });

  const handleNumber = (value) => {
    let newValue = value;
    if (!calc.isInitial)
      newValue = calc.current + value;
    setCalc({
      current: newValue,
      total: calc.total,
      isInitial: false,
      preOp: calc.preOp
    });
  }

  function handleOperator(value) {
    // alert("Operator clicked is "+value);
    const total = doCalculation();

    setCalc({
      current: total.toString(),
      total: total.toString(),
      isInitial: true,
      preOp: value
    });
  }
  function doCalculation() {
    let total = parseInt(calc.total);

    switch (calc.preOp) {
      case "+":
        total += parseInt(calc.current);
        break;
      case "-": total -= parseInt(calc.current);
        break;
      case "*": total *= parseInt(calc.current);
        break;
      case "/": total /= parseInt(calc.current);
        break;
      default: total = parseInt(calc.current);

    }
    return total;
  }
  function handleClear() {
    setCalc({
      current: "0",
      total: "0",
      isInitial: true,
      preOp: ""
    });
  }

  function handleEquals() {
    let total = doCalculation();
    setCalc({
      current: total.toString(),
      total: total.toString(),
      isInitial: true,
      preOp: "="
    });
  }

  return (
    <div className='container my-4'>
      <div className='display'>{calc.current}</div>
      <div className='d-flex'>
        <Calculator value="7" className="btn  btn-outline-dark btn-rounded mx-0.5" onClick={handleNumber} />
        <Calculator value="8" className="btn  btn-outline-dark btn-rounded mx-0.5" onClick={handleNumber} />
        <Calculator value="9" className="btn  btn-outline-dark btn-rounded mx-0.5" onClick={handleNumber} />
        <Calculator value="/" className="btn btn-warning btn-outline-dark btn-rounded mx-0.5" onClick={handleOperator} />
      </div>
      <div className='d-flex'>
        <Calculator value="4" className="btn  btn-outline-dark btn-rounded mx-0.5" onClick={handleNumber} />
        <Calculator value="5" className="btn  btn-outline-dark btn-rounded mx-0.5" onClick={handleNumber} />
        <Calculator value="6" className="btn  btn-outline-dark btn-rounded mx-0.5" onClick={handleNumber} />
        <Calculator value="*" className="btn btn-warning btn-outline-dark btn-rounded mx-0.5" onClick={handleOperator} />
      </div>
      <div className='d-flex'>
        <Calculator value="1" className="btn  btn-outline-dark btn-rounded mx-0.5" onClick={handleNumber} />
        <Calculator value="2" className="btn  btn-outline-dark btn-rounded mx-0.5" onClick={handleNumber} />
        <Calculator value="3" className="btn  btn-outline-dark btn-rounded mx-0.5" onClick={handleNumber} />
        <Calculator value="+" className="btn btn-warning btn-outline-dark btn-rounded mx-0.5" onClick={handleOperator} />
      </div>
      <div className='d-flex'>
        <Calculator value="C" className="btn  btn-outline-dark btn-rounded mx-0.5" onClick={handleClear} />
        <Calculator value="0" className="btn  btn-outline-dark btn-rounded mx-0.5" onClick={handleNumber} />
        <Calculator value="=" className="btn  btn-warning btn-outline-dark btn-rounded mx-0.5" onClick={handleEquals} />
        <Calculator value="-" className="btn btn-warning btn-outline-dark btn-rounded mx-0.5" onClick={handleOperator} />
      </div>
    </div>
  )
}