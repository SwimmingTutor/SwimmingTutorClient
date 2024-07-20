import React, { useState } from 'react';

const GenderRadio = ({ label = 'label' }) => {
  const [selectedGender, setSelectedGender] = useState('');

  return (
    <div>
      <label htmlFor={label} className='mb-2 block text-sm font-semibold leading-6'>
        {label}
      </label>
      <div className='flex items-center space-x-8'>
        <div className='flex items-center'>
          <input
            id='male'
            name='gender'
            type='radio'
            value='male'
            checked={selectedGender === 'male'}
            onChange={e => setSelectedGender(e.target.value)}
            className='form-radio h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500'
          />
          <label htmlFor='male' className='ml-2 text-sm font-medium text-gray-700'>
            남성
          </label>
        </div>
        <div className='flex items-center'>
          <input
            id='female'
            name='gender'
            type='radio'
            value='female'
            checked={selectedGender === 'female'}
            onChange={e => setSelectedGender(e.target.value)}
            className='form-radio h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500'
          />
          <label htmlFor='female' className='ml-2 text-sm font-medium text-gray-700'>
            여성
          </label>
        </div>
      </div>
    </div>
  );
};

export default GenderRadio;
