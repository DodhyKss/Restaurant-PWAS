class FavoriteRestaurantSearchPresenter {
  constructor({ favoriteRestaurants, view }) {
    this._view = view;
    this._listenToSearchRequestByUser();
    this._favoriteRestaurants = favoriteRestaurants;
  }

  _listenToSearchRequestByUser() {
    this._view.runWhenUserIsSearching((latestQuery) => {
      this._searchRestaurants(latestQuery);
    });
  }

  async _searchRestaurants(latestQuery) {
    this._latestQuery = latestQuery.trim();

    let foundRestaurant;
    if (this.latestQuery.length > 0) {
      foundRestaurant = await this._favoriteRestaurants.searchRestaurants(this.latestQuery);
    } else {
      foundRestaurant = await this._favoriteRestaurants.getAllRestaurants();
    }

    this._showFoundRestaurant(foundRestaurant);
  }

  // eslint-disable-next-line class-methods-use-this
  _showFoundRestaurant(restaurant) {
    this._view.showFavoriteRestaurant(restaurant);
  }

  get latestQuery() {
    return this._latestQuery;
  }
}

export default FavoriteRestaurantSearchPresenter;
