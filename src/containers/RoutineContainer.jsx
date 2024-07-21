import { useEffect } from 'react';
import { Outlet, useOutletContext } from 'react-router-dom';
import usePageSetup from '../hooks/usePageSetup.js';
import { useHeaderContext } from '../context/HeaderContext.jsx';

const RoutineContainer = () => {
  usePageSetup('routine');
  // const { handleHeaderType } = useOutletContext();
  const { handleHeaderType } = useHeaderContext();

  useEffect(() => {
    handleHeaderType('routine');
  }, [handleHeaderType]);
  
  return (
    <div className='flex h-fit w-full flex-col gap-8'>
      <Outlet />
    </div>
  );
};
export default RoutineContainer;
