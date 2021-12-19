import Index from '../views/pages/index';
import Restaurant from '../views/pages/restaurant';
import Favorite from '../views/pages/favorite';

const routes = {
  '/': Index,
  '/favorite': Favorite,
  '/restaurant/:id': Restaurant,
};

export default routes;
