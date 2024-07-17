import React, { useState } from 'react';
import { Button } from '../../components/Button.jsx';
import { PageTitle } from '../../components/PageTitle.jsx';

export const Level = () => {
  const [selected, setSelected] = useState('');

  const handleChange = event => {
    setSelected(event.target.value);
  };

  const radioOptions = [
    { stroke: 'freecrawl', label: '자유형', level: '-' },
    { stroke: 'backstroke', label: '배영', level: '-' },
    { stroke: 'breathstroke', label: '평영', level: '-' },
    { stroke: 'butterfly', label: '접영', level: '-' }
  ];

  return (
    <div>
      <PageTitle title={'내 수영 레벨'} />
      <div className='p-5'>
        {radioOptions.map(option => (
          <div key={option.stroke} className={`p-4 ${selected === option.value ? 'border-2 border-blue-600' : ''}`}>
            <input
              type='radio'
              stroke={option.stroke}
              name='radioGroup'
              value={option.stroke}
              checked={selected === option.stroke}
              onChange={handleChange}
              className='h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600'
            />
            <label htmlFor={option.stroke} className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
              {option.label}: {option.level}
            </label>
          </div>
        ))}
      </div>
      <Button content={'테스트 시작'} path={`test-${selected}`} />
    </div>
  );
};
