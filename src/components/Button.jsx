import React from 'react'

const Button = ({text,className,icon}) => {
  return (
    <div>
      <button
        className={` text-black  font-bold font-inter text-lg scale-95 hover:scale-100 duration-200 rounded-md ${className}`}
      >
        <div className="flex">
          <div className='mt-1'> {icon}</div>
          {text}
        </div>
      </button>
    </div>
  );
}

export default Button 