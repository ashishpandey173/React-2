import React, { useState } from 'react';
import Display from './Display';
import Keypad from './Keypad';

const Calculator = () => {
  const [value, setValue] = useState('0');
  const [operation, setOperation] = useState(null);
  const [operand, setOperand] = useState(null);

  const handleNumberClick = (number) => {
    if (value === '0') {
      setValue(number);
    } else {
      setValue(value + number);
    }
  };

  const handleOperationClick = (newOperation) => {
    if (operand !== null) {
      handleEqualClick();
      setOperation(newOperation);
      setOperand(Number(value));
    } else {
      setOperation(newOperation);
      setOperand(Number(value));
      setValue('0');
    }
  };

  const handleEqualClick = () => {
    if (operand !== null && operation !== null) {
      switch (operation) {
        case '+':
          setValue(operand + Number(value));
          break;
        case '-':
          setValue(operand - Number(value));
          break;
        case '*':
          setValue(operand * Number(value));
          break;
        case '/':
          setValue(operand / Number(value));
          break;
        default:
          break;
      }
      setOperation(null);
      setOperand(null);
    }
  };

  const handleAllClearClick = () => {
    setValue('0');
    setOperation(null);
    setOperand(null);
  };

  return (
    <div className="calculator">
      <Display value={value} />
      <Keypad
        onClick={(key) => {
          switch (key) {
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            case '0':
              handleNumberClick(key);
              break;
            case '+':
            case '-':
            case '*':
            case '/':
              handleOperationClick(key);
              break;
            case '=':
              handleEqualClick();
              break;
            case 'AC':
              handleAllClearClick();
              break;
            default:
              break;
          }
        }}
      />
    </div>
  );
};

export default Calculator;
