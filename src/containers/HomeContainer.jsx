import usePageSetup from '../hooks/usePageSetup';
import { Outlet } from 'react-router-dom';

const HomeContainer = () => {
  usePageSetup('home');
  // console.log('HomeContainer');
  return (
    <div className='flex h-fit w-full flex-col gap-8'>
      <Outlet />
    </div>
  );
};

export default HomeContainer;
