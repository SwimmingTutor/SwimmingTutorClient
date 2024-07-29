import { useState, useEffect } from 'react';
import { MinusIcon, PlusIcon } from '@heroicons/react/20/solid';

const InputNumber = ({ label, unit, defaultValue, onChange }) => {
  const [internalValue, setInternalValue] = useState(defaultValue);

  useEffect(() => {
    if (defaultValue !== undefined) {
      setInternalValue(defaultValue);
      onChange(defaultValue);
    }
  }, []);

  const handleIncrement = () => {
    const newValue = internalValue + unit;
    setInternalValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  const handleDecrement = () => {
    const newValue = internalValue - unit;
    setInternalValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div className='col-span-full'>
      <label className='block text-sm font-semibold leading-6'>{label}</label>
      <div className='relative mt-2 flex items-center space-x-2'>
        <MinusIcon className='h-5 w-5 cursor-pointer' onClick={handleDecrement} />
        <input
          type='text'
          value={internalValue}
          className='w-50% block rounded-md border-0 px-3 py-1.5 text-center text-zinc-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:italic placeholder:text-zinc-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6'
          readOnly
        />
        <PlusIcon className='h-5 w-5 cursor-pointer' onClick={handleIncrement} />
      </div>
    </div>
  );
};

export default InputNumber;
