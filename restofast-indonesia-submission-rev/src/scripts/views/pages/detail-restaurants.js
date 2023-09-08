import UrlParser from '../../routes/url-parser';
import TheRestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/favorite-button-initiator';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const Detail = {
  async render() {
    return `
      <div id="restaurant" class="restaurant"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await TheRestaurantDbSource.detailRestaurant(url.id);
    const restaurantDrinks = restaurant.menus.drinks;
    const restaurantFoods = restaurant.menus.foods;
    const restaurantReviews = restaurant.customerReviews;
    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    // create list restaurant drinks menu
    restaurantDrinks.forEach((drink) => {
      const listDrinks = document.createElement('li');
      listDrinks.setAttribute('tabindex', 0);
      listDrinks.innerHTML = drink.name;
      document.querySelector('.list__menu__drinks').appendChild(listDrinks);
    });

    // create list restaurant foods menu
    restaurantFoods.forEach((food) => {
      const listFoods = document.createElement('li');
      listFoods.setAttribute('tabindex', 0);
      listFoods.innerHTML = food.name;
      document.querySelector('.list__menu__foods').appendChild(listFoods);
    });

    // create customer reviews
    restaurantReviews.forEach((review) => {
      const customerName = document.createElement('h4');
      const reviewDate = document.createElement('p');
      const customerReview = document.createElement('p');
      customerName.setAttribute('class', 'costumer-name');
      customerName.innerHTML = `${review.name}:`;
      reviewDate.innerHTML = review.date;
      customerReview.innerHTML = review.review;
      document.querySelector('.costumer__reviews').appendChild(customerName);
      document.querySelector('.costumer__reviews').appendChild(reviewDate);
      document.querySelector('.costumer__reviews').appendChild(customerReview);
    });

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurant: FavoriteRestaurantIdb,
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
        rating: restaurant.rating,
      },
    });
  },
};

export default Detail;
