import listRestaurant from '../views/pages/list-restaurants';
import Detail from '../views/pages/detail-restaurants';
import Like from '../views/pages/favorite-restaurants';

const routes = {
  '/': listRestaurant, // default page
  '/list-restaurant': listRestaurant,
  '/detail/:id': Detail,
  '/like': Like,
};

export default routes;
