import container from '../../styles/container.scss';
import appBarStyle from '../../styles/components/app-bar.scss';

class AppBar extends HTMLElement {
  constructor() {
    super();

    this.html = `
        <header id="header" class="${container.lg}">
            <div id="site-title" class="${appBarStyle.siteTitle}">
                <a href="/" title="Restawuran" rel="home">Restawuran</a>
            </div>
            <button id="menu-toggle" aria-label="Menu">
                <span class="${appBarStyle.hamburger}"></span>
            </button>
            <nav id="menu">
                <ul class="${appBarStyle.navbar}">
                    <li><a href="/" title="Home">Home</a></li>
                    <li><a href="#" title="Favorite">Favorite</a></li>
                    <li><a href="//dienoov.github.io" target="_blank" title="About">About Us</a></li>
                </ul>
            </nav>
        </header>
    `;

    this.addEventListener('click', this.clickListener.bind(this));
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = this.html;
  }

  toggle() {
    this.querySelector('nav').classList.toggle(appBarStyle.show);
  }

  clickListener(ev) {
    if (!ev.target.closest('#menu-toggle')) return;

    this.toggle();
  }
}

customElements.define('app-bar', AppBar);
