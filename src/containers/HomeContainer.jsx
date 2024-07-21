import { useEffect } from 'react';
import usePageSetup from '../hooks/usePageSetup.js';
import { Outlet, useOutletContext } from 'react-router-dom';
import { useHeaderContext } from '../context/HeaderContext.jsx';

const HomeContainer = () => {
  // console.log('HomeContainer');
  usePageSetup('home');
  const { handleHeaderType } = useHeaderContext();

  useEffect(() => {
    handleHeaderType('home');
  }, [handleHeaderType]);

  return (
    <div className='flex h-fit w-full flex-col gap-8'>
      <Outlet />
    </div>
  );
};

export default HomeContainer;
