import axios from 'axios';

export const IPTrackerService = {
  get: async (apiKey, ipAddress) =>
    axios
      .get(
        `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ipAddress}`,
      )
      .then(res => res?.data),
};
