import { createContext, useState, useContext } from 'react';

const HeaderContext = createContext();

const HeaderProvider = ({ children }) => {
  const [headerType, setHeaderType] = useState('home');

  const handleHeaderType = page => {
    setHeaderType(page);
  };

  return <HeaderContext.Provider value={{ headerType, handleHeaderType }}>{children}</HeaderContext.Provider>;
};

const useHeaderContext = () => {
  return useContext(HeaderContext);
};

export { HeaderProvider, useHeaderContext };
