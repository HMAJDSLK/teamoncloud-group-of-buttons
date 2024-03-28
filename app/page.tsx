"use client";
import React from 'react';
import Buttons from './components/Buttons/Buttons'; // Assuming Buttons.tsx is in the same directory

const App: React.FC = () => {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div className='flex items-center justify-center gap-4'>
      <Buttons text="Primary LG" type="primary" onClick={handleClick} size="lg" />
      <br /><br />
      <Buttons text="Primary LG Disabled" type="primary" onClick={handleClick} disabled={true} size='lg' />
      <br /><br /><br /><br />

      <Buttons text="Secondary SM" type="secondary" onClick={handleClick} size="sm" />
      <br /><br />
      <Buttons text="Secondary SM Disabled" type="secondary" onClick={handleClick} disabled={true} size='sm' />
    </div>
  );
};

export default App;
