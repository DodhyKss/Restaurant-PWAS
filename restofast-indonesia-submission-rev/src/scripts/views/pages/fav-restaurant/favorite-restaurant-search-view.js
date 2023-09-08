import { createRestaurantItemTemplate } from '../../templates/template-creator';

class FavoriteRestaurantSearchView {
  getTemplate() {
    return `
       <div class="content">
       <input id="query" type="text">
       <h2 class="content__heading">Your Favorite Restaurant</h2>
           <div id="restaurants" class="restaurants">
                      
           </div>
       </div>
   `;
  }

  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  showRestaurant(restaurant) {
    this.showFavoriteRestaurant(restaurant);
  }

  showFavoriteRestaurant(restaurant = []) {
    let html;
    if (restaurant.length) {
      html = restaurant.reduce((carry, rest) => carry.concat(createRestaurantItemTemplate(rest)), '');
    } else {
      html = this._getEmptyRestaurantTemplate();
    }

    document.getElementById('restaurants').innerHTML = html;

    document.getElementById('restaurants').dispatchEvent(new Event('restaurants:updated'));
  }

  _getEmptyRestaurantTemplate() {
    return '<div class="restaurant-item__not__found restaurants__not__found">Tidak ada restaurant untuk ditampilkan</div>';
  }
}

export default FavoriteRestaurantSearchView;
