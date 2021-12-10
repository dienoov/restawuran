import ENDPOINTS from './endpoints';

class DicodingRestaurant {
  static async list() {
    const response = await fetch(ENDPOINTS.LIST);
    const responseJSON = await response.json();
    return responseJSON.results;
  }
}

export default DicodingRestaurant;
