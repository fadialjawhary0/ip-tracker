import React, { createContext, useState } from 'react';

export const FetchLoadingContext = createContext();

export const FetchLoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const value = { loading, setLoading };

  return (
    <FetchLoadingContext.Provider value={value}>
      {children}
    </FetchLoadingContext.Provider>
  );
};
