import React, { useState, useEffect, useContext, useRef } from 'react';

import Map from './Map';
import { FetchLoadingContext, IpAddressContext } from '../../contexts';
import { IPTrackerService } from './services/ipTracker.service';

const IPTracker = () => {
  const [position, setPosition] = useState([51.505, -0.09]);

  const { ipAddressDetails, setIpAddressDetails } =
    useContext(IpAddressContext);
  const { setLoading } = useContext(FetchLoadingContext);

  const prevIpAddress = useRef(ipAddressDetails?.ipAddress);
  const isInitialFetch = useRef(true);

  useEffect(() => {
    const fetchData = async () => {
      if (
        isInitialFetch.current ||
        prevIpAddress.current !== ipAddressDetails?.ipAddress
      ) {
        try {
          setLoading(true);
          const data = await IPTrackerService.get(
            process.env.REACT_APP_API_KEY,
            ipAddressDetails?.ipAddress,
          );
          prevIpAddress.current = data?.ip;
          setPosition([data.location.lat, data.location.lng]);
          setIpAddressDetails({
            ipAddress: data?.ip,
            location: `${data?.location?.region}, ${data?.location?.country}`,
            timezone: `UTC ${data?.location?.timezone}`,
            isp: data?.isp,
          });
        } catch (e) {
          console.error('Error: ', e.message);
        } finally {
          setLoading(false);
        }
        isInitialFetch.current = false;
      }
    };

    fetchData();
  }, [ipAddressDetails?.ipAddress]);

  return <Map position={position} />;
};

export default IPTracker;
