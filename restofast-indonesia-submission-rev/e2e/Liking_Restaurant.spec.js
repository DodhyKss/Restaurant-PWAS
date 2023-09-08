const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#query');
  // I.seeElement('.query'); // membuat test menjadi gagal
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');

  I.amOnPage('/');
  I.waitForElement('.restaurant__name a', 5000);
  I.seeElement('.restaurant__name a');

  const firstFilm = locate('.restaurant__name a').first();
  const firstFilmTitle = await I.grabTextFrom(firstFilm);
  I.click(firstFilm);
  I.waitForElement('#likeButton', 5000);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.waitForElement('.restaurant-item', 5000);
  I.seeElement('.restaurant-item');
  const likedFilmTitle = await I.grabTextFrom('.restaurant__name');

  assert.strictEqual(firstFilmTitle, likedFilmTitle);
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');

  I.amOnPage('/#like');
  I.waitForElement('.restaurant__name a', 5000);
  I.seeElement('.restaurant__name a');

  const firstFilm = locate('.restaurant__name a').first();
  I.click(firstFilm);
  I.waitForElement('#likeButton', 5000);
  I.seeElement('#likeButton');
  I.click('#likeButton');
});
