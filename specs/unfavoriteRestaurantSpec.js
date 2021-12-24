import * as TestFactories from './helpers/testFactories';
import FavoriteIdb from '../src/scripts/data/favorite-idb';

describe('Remove from favorite restaurant', () => {
  const addFavoriteButton = () => {
    document.body.innerHTML = '<div id="favorite"></div>';
  };

  beforeEach(async () => {
    addFavoriteButton();
    await FavoriteIdb.put({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteIdb.delete(1);
  });

  it('should show remove from favorite button when the restaurant has been added to favorite', async () => {
    await TestFactories.createFavoriteButtonWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="Remove from favorite"]'))
      .toBeTruthy();
  });

  it('should not show add to favorite button when the restaurant has been added to favorite', async () => {
    await TestFactories.createFavoriteButtonWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="Add to favorite"]'))
      .toBeFalsy();
  });

  it('should be able to remove restaurant from favorite', async () => {
    await TestFactories.createFavoriteButtonWithRestaurant({ id: 1 });

    document.getElementById('favorite').dispatchEvent(new Event('click'));

    expect(await FavoriteIdb.all()).toEqual([]);
  });

  it('should not throw an error if the removed restaurant is not in the list', async () => {
    await TestFactories.createFavoriteButtonWithRestaurant({ id: 1 });

    await FavoriteIdb.delete(1);

    document.getElementById('favorite').dispatchEvent(new Event('click'));

    expect(await FavoriteIdb.all()).toEqual([]);
  });
});
