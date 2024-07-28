// import { useContext, useEffect } from 'react';
// import { HeaderContext } from '../context/HeaderContext.jsx';

// const usePageSetup = pageType => {
//   const { handleHeaderType } = useContext(HeaderContext);

//   useEffect(() => {
//     handleHeaderType(pageType);
//   }, [pageType, handleHeaderType]);

//   return null;
// };

// export default usePageSetup;

import { useEffect } from 'react';
import { useHeaderContext } from '../context/HeaderContext.jsx';

const usePageSetup = pageType => {
  const { handleHeaderType } = useHeaderContext();

  useEffect(() => {
    // console.log('PageType:', pageType);
    handleHeaderType(pageType);
  }, [pageType, handleHeaderType]);
};

export default usePageSetup;
