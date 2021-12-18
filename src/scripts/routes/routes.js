import Index from '../views/pages/index';
import Restaurant from '../views/pages/restaurant';

const routes = {
  '/': Index,
  '/restaurant/:id': Restaurant,
};

export default routes;
