import { Outlet, useOutletContext } from 'react-router-dom';
import usePageSetup from '../hooks/usePageSetup.js';
import { useHeaderContext } from '../context/HeaderContext.jsx';
import { useEffect } from 'react';

const SwimmingpoolContainer = () => {
  usePageSetup('swimmingpool');
  // const { handleHeaderType } = useOutletContext();
  const { handleHeaderType } = useHeaderContext();

  useEffect(() => {
    handleHeaderType('swimmingpool');
  }, [handleHeaderType]);

  return (
    <>
      <Outlet />
    </>
  );
};
export default SwimmingpoolContainer;
