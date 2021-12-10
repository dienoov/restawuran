import ENDPOINTS from './endpoints';

const IMAGE_SMALL = 'small';
const IMAGE_MEDIUM = 'medium';
const IMAGE_LARGE = 'large';

class DicodingRestaurant {
  static async list() {
    const response = await fetch(ENDPOINTS.LIST);
    const responseJSON = await response.json();
    return responseJSON.restaurants;
  }

  static image(resolution, id) {
    return ENDPOINTS.IMAGE(resolution, id);
  }

  static get IMAGE_SMALL() {
    return IMAGE_SMALL;
  }

  static get IMAGE_MEDIUM() {
    return IMAGE_MEDIUM;
  }

  static get IMAGE_LARGE() {
    return IMAGE_LARGE;
  }
}

export default DicodingRestaurant;
