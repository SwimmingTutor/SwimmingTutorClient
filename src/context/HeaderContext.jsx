import { createContext, useState } from 'react';

export const HeaderContext = createContext();

export const HeaderProvider = ({ children }) => {
  const [headerType, setHeaderType] = useState('home');

  const handleHeaderType = type => {
    setHeaderType(type);
  };

  return <HeaderContext.Provider value={{ headerType, handleHeaderType }}>{children}</HeaderContext.Provider>;
};
