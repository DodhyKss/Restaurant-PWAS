import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurant__name">Detail ${restaurant.name} Restaurant</h2>
  <img class="restaurant__image lazyload" data-src="${CONFIG.BASE_URL_IMAGE}${restaurant.pictureId}" alt="${restaurant.name}">
  <div class="restaurant__info">
  <h3>Information</h3>
    <h4>Restaurant Name</h4>
    <p tabindex="0">${restaurant.name}</p>
    <h4>City</h4>
    <p tabindex="0">${restaurant.city}</p>
    <h4>Address</h4>
    <p tabindex="0">${restaurant.address}</p>
    <h4>Rating</h4>
    <p tabindex="0">${restaurant.rating}</p>
  </div>
  <div class="restaurant__menu">
    <h4 tabindex="0" class=""foods>Foods Menu</h4>
    <ul class="list__menu__foods">
    </ul>
    <h4 tabindex="0" class="drinks">Drinks Menu</h4>
    <ul class="list__menu__drinks">
    </ul>
  </div>
  <div class="costumer__reviews">
    <h4>Customer Reviews</h4>
  </div>
  <div class="restaurant__description">
    <h3>Description</h3>
    <p tabindex="0">${restaurant.description}</p>
  </div>
  <button class="back">
    <a href="#/list-restaurant">Back</a>
  </button>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
      <img class="restaurant-item__header__poster lazyload" alt="${restaurant.name || '-'}"
          data-src="${CONFIG.BASE_URL_IMAGE}${restaurant.pictureId}">
      <div class="restaurant-item__header__rating">
          <p>Rating  ★<span class="restaurant-item__header__rating__score">${restaurant.rating || '-'}</span></p>
      </div>
    </div>
    <div class="restaurant-item__content">
      <p>${restaurant.city}</p>
      <h3 class="restaurant__name"><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name || '-'}</a></h3>
      <p>${restaurant.description || '-'}</p>
    </div>
  </div>
`;

const createFavoriteButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like" style="background-color: lightgreen">
    <p>Add to favorite</p>
  </button>
`;

const createUnFavoriteButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like" style="background-color: lightsalmon">
    <p>Remove to favorite</p>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createFavoriteButtonTemplate,
  createUnFavoriteButtonTemplate,
};
