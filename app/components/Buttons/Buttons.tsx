import React from 'react';

interface ButtonsProps {
  text: string;
  type: 'primary' | 'secondary';
  onClick?: () => void;
  disabled?: boolean;
  size?: 'lg' | 'sm';
}

const Buttons: React.FC<ButtonsProps> = ({ text, type, onClick, disabled, size }) => {
  let buttonsClass = "flex justify-center items-center rounded-[6px] text-sm font-medium";

  switch (size) {
    case 'lg':
      buttonsClass += ' min-w-[77px] h-[38px] px-4 py-[10px] text-[14px] ';
      break;
      
    case 'sm':
      buttonsClass += ' text-[12px] min-w-[104px] h-[30px] px-[30px] py-1.5 pr-[30px] pl-[30px]';
      break;
    default:
      buttonsClass += ' p-auto w-[77px] h-[40px]';
  }

  if (type === 'primary') {
    buttonsClass += ' bg-[#6F42C1] text-[#FFFFFF]';
  } else if (type === 'secondary') {
    buttonsClass += disabled ? ' bg-neutral-500 text-[#FFFFFF] cursor-not-allowed ' :' bg-white text-[#6F42C1] border-violet-700 border-[1px]';
  }

  const hoverClass = disabled ? '' : (type === 'primary' ? 'hover:bg-[#875DD5] hover:text-[#FFFFFF]' : 'hover:bg-[#EEE5FF] hover:text-[#6F42C1]');
  const disabledClass = disabled ? (type === 'primary' ? ' bg-neutral-500 text-[#FFFFFF] cursor-not-allowed ' : ' bg-neutral-500 text-[#FFFFFF] cursor-not-allowed ') : '';

  return (
    <button
      className={`${buttonsClass} ${hoverClass} ${disabledClass}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Buttons;
