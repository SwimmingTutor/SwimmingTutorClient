import { useContext, useEffect } from 'react';
import { HeaderContext } from '../context/HeaderContext.jsx';

const usePageSetup = pageType => {
  const { handleHeaderType } = useContext(HeaderContext);

  useEffect(() => {
    handleHeaderType(pageType);
  }, [pageType, handleHeaderType]);

  return null;
};

export default usePageSetup;

// import { useOutletContext } from 'react-router-dom';
// import { useEffect } from 'react';

// const usePageSetup = (headerType = 'home') => {
//   const { handleHeaderType } = useOutletContext();

//   useEffect(() => {
//       if (headerType) {
//           handleHeaderType(headerType);
//       }
//   }, [headerType, handleHeaderType]);
// };

// export default usePageSetup;
