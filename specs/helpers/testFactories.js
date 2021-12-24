import FavoriteButtonPresenter from '../../src/scripts/utils/favorite-button-presenter';

const createFavoriteButtonWithRestaurant = async (restaurant) => {
  const button = new FavoriteButtonPresenter({
    button: document.getElementById('favorite'),
    restaurant,
  });

  await button.render();
};

export { createFavoriteButtonWithRestaurant };
