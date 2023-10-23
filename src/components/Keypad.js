import React from 'react';

const Keypad = ({ onClick }) => {
  const keys = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0',
    '+',
    '-',
    '*',
    '/',
    '=',
    'AC',
  ];

  return (
    <div className="keypad">
      {keys.map((key) => (
        <button key={key} onClick={() => onClick(key)}>
          {key}
        </button>
      ))}
    </div>
  );
};

export default Keypad;