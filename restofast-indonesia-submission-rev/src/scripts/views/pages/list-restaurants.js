import TheRestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const listRestaurant = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Explore Restaurants</h2>
        <div id="restaurants" class="restaurants">
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurant = await TheRestaurantDbSource.listRestaurantSource();
    const restaurantContainer = document.querySelector('#restaurants');
    restaurant.forEach((rest) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(rest);
    });
  },
};

export default listRestaurant;
