class CacheHandler {

  // Variable to store the timestamps for recent updates to different endpoints
  static cacheInvalidationRegister = {};

  /**
   * Extracts the API endpoint from an address.
   * That is, the part between the BaseUrl and the Query Parameters
   *
   * @param {string} url
   *
   * @returns {string}
   */
  static extractUrlEndpoint = (url, apiBaseUrl = process.env.APP_API) => {
    let baselessUrl = url.replace(apiBaseUrl, '');

    if (baselessUrl === '' || baselessUrl.indexOf('?') === 1) {
      return '/';
    }

    baselessUrl = baselessUrl.indexOf('/') === 0 ? baselessUrl : `/${baselessUrl}`;
    const endpoints = baselessUrl.match(/\/[\w\-]+/);

    return endpoints && endpoints[0] || null;
  }
}

export default CacheHandler;
