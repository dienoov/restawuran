import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import './views/components/app-bar';
import './views/components/app-hero';
import './views/components/app-list';
import './views/components/app-recipe';
import './views/components/app-footer';
import App from './views/app';

const app = new App({
  content: document.getElementById('content'),
});

window.addEventListener('hashchange', app.render);
window.addEventListener('load', app.render);
