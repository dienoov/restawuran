const assert = require('assert');

Feature('Review');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('Writing a review on a restaurant', async ({ I }) => {
  I.seeElement('#restaurants a');
  I.click(locate('#restaurants a').first());

  const name = 'Peter';
  const review = 'Kopinya nendang';

  I.seeElement('#form-review');
  I.fillField('#field-name', name);
  I.fillField('#field-review', review);
  I.click('//input[@type="submit"]');

  I.waitForText(name, 5, '#reviews');

  const submittedName = await I.grabTextFrom(locate('#reviews h4').last());
  const submittedReview = await I.grabTextFrom(locate('#reviews p').last());

  assert.strictEqual(name, submittedName);
  assert.strictEqual(review, submittedReview);
});
