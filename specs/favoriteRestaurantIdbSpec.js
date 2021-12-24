import { itActsAsFavoriteRestaurantModel } from './contract/favoriteRestaurantContract';
import FavoriteIdb from '../src/scripts/data/favorite-idb';

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteIdb.all()).forEach(async (restaurant) => {
      await FavoriteIdb.delete(restaurant.id);
    });
  });

  itActsAsFavoriteRestaurantModel(FavoriteIdb);
});
