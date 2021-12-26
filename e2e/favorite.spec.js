const assert = require('assert');

Feature('Favorite');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('Adding restaurant to favorite', async ({ I }) => {
  I.see('You have no favorite restaurant', 'app-error');

  I.amOnPage('/');

  I.seeElement('#restaurants');

  const firstRestaurant = locate('#restaurants a h2').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#favorite');
  I.click('button#favorite');

  I.amOnPage('/#/favorite');
  I.seeElement('#restaurants a h2');
  const favoriteRestaurantTitle = await I.grabTextFrom('#restaurants a h2');

  assert.strictEqual(firstRestaurantTitle, favoriteRestaurantTitle);
});

Scenario('Removing restaurant from favorite', async ({ I }) => {
  I.see('You have no favorite restaurant', 'app-error');

  I.amOnPage('/');

  I.seeElement('#restaurants');

  const firstRestaurant = locate('#restaurants a h2').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#favorite');
  I.click('button#favorite');

  I.amOnPage('/#/favorite');
  I.seeElement('#restaurants a h2');
  const favoriteRestaurantTitle = await I.grabTextFrom('#restaurants a h2');

  assert.strictEqual(firstRestaurantTitle, favoriteRestaurantTitle);

  I.click(locate('#restaurants a').first());

  I.seeElement('#favorite');
  I.click('button#favorite');

  I.amOnPage('/#/favorite');
  I.see('You have no favorite restaurant', 'app-error');
});
