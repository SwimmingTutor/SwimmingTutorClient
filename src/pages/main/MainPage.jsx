import { useOutletContext } from 'react-router-dom';

import { Main } from '../../components/Main.jsx';
import { Card } from '../../components/Card.jsx';
import { useEffect } from 'react';
import usePageSetup from '../../hooks/usePageSetup.js';
import ExampleGraph from '../../components/ExampleGraph';

export const MainPage = () => {
  usePageSetup('home');

  return (
    <div className='flex h-fit w-full flex-col gap-8'>
      <ExampleGraph />
    </div>
  );
};
