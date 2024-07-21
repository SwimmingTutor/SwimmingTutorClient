import { useEffect } from 'react';
import { Outlet, useOutletContext } from 'react-router-dom';
import usePageSetup from '../hooks/usePageSetup.js';
import { useHeaderContext } from '../context/HeaderContext.jsx';

const MyContainer = () => {
  usePageSetup('my');
  // const { handleHeaderType } = useOutletContext();
  const { handleHeaderType } = useHeaderContext();

  useEffect(() => {
    handleHeaderType('my');
  }, [handleHeaderType]);

  return <Outlet />;
};

export default MyContainer;
