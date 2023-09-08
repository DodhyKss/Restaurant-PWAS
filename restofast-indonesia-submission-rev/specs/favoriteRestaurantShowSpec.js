import FavoriteRestaurantSearchView from '../src/scripts/views/pages/fav-restaurant/favorite-restaurant-search-view';
import FavoriteRestaurantShowPresenter from '../src/scripts/views/pages/fav-restaurant/favorite-restaurant-show-presenter';
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';

describe('Showing all favorite restaurants', () => {
  let view;

  const renderTemplate = () => {
    view = new FavoriteRestaurantSearchView();
    document.body.innerHTML = view.getTemplate();
  };

  beforeEach(() => {
    renderTemplate();
  });

  describe('When no restaurants have been liked', () => {
    it('should ask for the favorite restaurants', () => {
      const favoriteRestaurant = spyOnAllFunctions(FavoriteRestaurantIdb);

      new FavoriteRestaurantShowPresenter({
        view,
        favoriteRestaurant,
      });

      expect(favoriteRestaurant.getAllRestaurants).toHaveBeenCalledTimes(1);
    });

    it('should show the information that no restaurants have been liked', (done) => {
      document.getElementById('restaurants').addEventListener('restaurants:updated', () => {
        expect(document.querySelectorAll('.restaurant-item__not__found').length)
          .toEqual(1);

        done();
      });

      const favoriteRestaurant = spyOnAllFunctions(FavoriteRestaurantIdb);
      favoriteRestaurant.getAllRestaurants.and.returnValues([]);

      new FavoriteRestaurantShowPresenter({
        view,
        favoriteRestaurant,
      });
    });
  });

  describe('When favorite restaurants exist', () => {
    it('should show the restaurants', (done) => {
      document.getElementById('restaurants').addEventListener('restaurants:updated', () => {
        expect(document.querySelectorAll('.restaurant-item').length).toEqual(2);
        done();
      });

      const favoriteRestaurant = spyOnAllFunctions(FavoriteRestaurantIdb);
      favoriteRestaurant.getAllRestaurants.and.returnValues([
        {
          id: 11, name: 'X', vote_average: 3, overview: 'Sebuah restaurant X',
        },
        {
          id: 22, name: 'Y', vote_average: 4, overview: 'Sebuah restaurant Y',
        },
      ]);

      new FavoriteRestaurantShowPresenter({
        view,
        favoriteRestaurant,
      });
    });
  });
});
