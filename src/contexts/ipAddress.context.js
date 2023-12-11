import React, { createContext, useState } from 'react';

export const IpAddressContext = createContext();

export const IpAddressProvider = ({ children }) => {
  const [ipAddressDetails, setIpAddressDetails] = useState({
    ipAddress: '',
    location: '',
    timezone: '',
    isp: '',
  });

  const value = {
    ipAddressDetails,
    setIpAddressDetails,
  };

  return (
    <IpAddressContext.Provider value={value}>
      {children}
    </IpAddressContext.Provider>
  );
};
