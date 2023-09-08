import FavoriteButtonInitiator from '../../src/scripts/utils/favorite-button-initiator';
import FavoriteRestaurantIdb from '../../src/scripts/data/favorite-restaurant-idb';

const createFavButtonPresenter = async (restaurant) => {
  await FavoriteButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRestaurant: FavoriteRestaurantIdb,
    restaurant,
  });
};

export { createFavButtonPresenter };
