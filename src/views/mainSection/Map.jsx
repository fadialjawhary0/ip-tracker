import 'leaflet/dist/leaflet.css';
import React, { useEffect, useRef } from 'react';
import L from 'leaflet';

import Pointer from '../../assets/icon-location.svg';
import { Box } from '@mui/material';

const Map = ({ position }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    mapRef.current = L.map('map', { zoomControl: false }).setView(position, 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(mapRef.current);

    const customIcon = L.icon({
      iconUrl: Pointer,
      iconSize: [38, 50],
      iconAnchor: [22, 30],
      popupAnchor: [-3, -76],
    });

    L.marker(position, { icon: customIcon }).addTo(mapRef.current);

    return () => {
      mapRef.current.remove();
    };
  }, [position]);

  return <Box id="map" sx={{ height: '100%', width: '100%' }}></Box>;
};

export default Map;
