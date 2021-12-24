import * as TestFactories from './helpers/testFactories';
import FavoriteIdb from '../src/scripts/data/favorite-idb';

describe('Add to favorite restaurant', () => {
  const addFavoriteButton = () => {
    document.body.innerHTML = '<div id="favorite"></div>';
  };

  beforeEach(() => {
    addFavoriteButton();
  });

  it('should show add to favorite button when the restaurant has not been added to favorite', async () => {
    await TestFactories.createFavoriteButtonWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="Add to favorite"]'))
      .toBeTruthy();
  });

  it('should not show remove from favorite button when the restaurant has not been added to favorite', async () => {
    await TestFactories.createFavoriteButtonWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="Remove from favorite"]'))
      .toBeFalsy();
  });

  it('should be able to add restaurant to favorite', async () => {
    await TestFactories.createFavoriteButtonWithRestaurant({ id: 1 });

    document.getElementById('favorite').dispatchEvent(new Event('click'));

    const movie = await FavoriteIdb.find(1);

    expect(movie).toEqual({ id: 1 });

    await FavoriteIdb.delete(1);
  });

  it('should not add the restaurant again when it\'s already added', async () => {
    await TestFactories.createFavoriteButtonWithRestaurant({ id: 1 });

    document.getElementById('favorite').dispatchEvent(new Event('click'));

    expect(await FavoriteIdb.all()).toEqual([{ id: 1 }]);

    await FavoriteIdb.delete(1);
  });

  it('should not be able to add the restaurant when it has no id', async () => {
    await TestFactories.createFavoriteButtonWithRestaurant({});

    document.getElementById('favorite').dispatchEvent(new Event('click'));

    expect(await FavoriteIdb.all()).toEqual([]);
  });
});
