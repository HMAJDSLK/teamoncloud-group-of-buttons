"use client";
import React from 'react';
import Buttons from './components/Buttons/Buttons'; // Assuming Buttons.tsx is in the same directory

const App: React.FC = () => {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div className=''>
      <Buttons text="Primary Button" type="primary" onClick={handleClick} size="lg" />
      <Buttons text="Primary Button" type="primary" onClick={handleClick} size="md" />
      <Buttons text="Primary Button" type="primary" onClick={handleClick} disabled={true} size='sm' />

      <Buttons text="Secondary Button" type="secondary" onClick={handleClick} size="lg" />
      <Buttons text="Secondary Button" type="secondary" onClick={handleClick} size="md" />
      <Buttons text="Secondary Button" type="secondary" onClick={handleClick} disabled={true} size='sm' />
    </div>
  );
};

export default App;
