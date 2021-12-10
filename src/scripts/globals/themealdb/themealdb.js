import ENDPOINTS from './endpoints';

class TheMealDB {
  static async random() {
    const response = await fetch(ENDPOINTS.RANDOM);
    const responseJSON = await response.json();
    return responseJSON.meals[0];
  }
}

export default TheMealDB;
