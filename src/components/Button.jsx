import React from 'react';

const Button = ({ onShow, show }) => {
  return (
    <button
      className='btn'
      style={{ backgroundColor: show ? '#FE928F' : '#3E36B0' }}
      onClick={onShow}
    >
      {show ? 'Close' : 'Add Task'}
    </button>
  );
};

export default Button;




