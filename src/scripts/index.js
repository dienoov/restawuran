import 'regenerator-runtime'; /* for async await transpile */
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import '../styles/main.scss';
import './views/components/app-bar';
import './views/components/app-hero';
import './views/components/app-list';
import './views/components/app-recipe';
import './views/components/app-footer';
import './views/components/app-error';
import './views/components/app-loading';
import './views/components/app-skip';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  content: document.getElementById('content'),
});

window.addEventListener('hashchange', app.render);

window.addEventListener('load', () => {
  app.render();
  swRegister();
});
