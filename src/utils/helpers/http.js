// third-party libraries
import axios from 'axios';

// helpers
import CacheHandler from 'utils/helpers/CacheHandler';

const http = axios.create({
  baseURL: process.env.APP_API,   // place corresponding baseUrl from .env here
  headers: {
    Authorization: `Bearer ${'token'}`,
  },
});

http.interceptors.response.use(
  (response) => {
    const { method, url } = response.config;
    const endpoint = CacheHandler.extractUrlEndpoint(url);

    if (method !== 'get' && endpoint) {
      const requestTimestamp = (new Date).getTime();
      CacheHandler.cacheInvalidationRegister[endpoint] = requestTimestamp;
      
      // cache invalidation can be carried out here
    }

    return response;
  },
  (error) => {
    // TODO: check the specific errors here
    if (error.response.data.message.includes('token')) {
      // redirect user here
    } else if (error.response.status === 500) {
      // redirect user here
    }

    return Promise.reject(error);
  }
);

export default http;
