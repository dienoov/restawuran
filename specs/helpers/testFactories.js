import FavoriteButtonPresenter from '../../src/scripts/utils/favorite-button-presenter';
import FavoriteIdb from '../../src/scripts/data/favorite-idb';

const createFavoriteButtonWithRestaurant = async (restaurant) => {
  const button = new FavoriteButtonPresenter({
    button: document.getElementById('favorite'),
    favoriteRestaurants: FavoriteIdb,
    restaurant,
  });

  await button.render();
};

export { createFavoriteButtonWithRestaurant };
