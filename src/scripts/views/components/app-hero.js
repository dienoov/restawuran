import appHeroStyle from '../../../styles/components/app-hero.scss';
import heroImage1 from '../../../images/heros/hero-image_1.jpg';
import heroImage2 from '../../../images/heros/hero-image_2.jpg';
import heroImage3 from '../../../images/heros/hero-image_3.jpg';
import heroImage4 from '../../../images/heros/hero-image_4.jpg';

class AppHero extends HTMLElement {
  constructor() {
    super();

    this.images = [heroImage1, heroImage2, heroImage3, heroImage4].map((image) => {
      const img = document.createElement('img');
      img.src = image;
      img.alt = '';
      return img;
    });

    this.index = 0;

    this.html = `
        <div id="hero">
            <div class="${appHeroStyle.images}"></div>
            <div class="${appHeroStyle.caption}">
                <h2>Your destination for all things delicious.</h2>
            </div>
        </div>
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = this.html;

    this.querySelector(`.${appHeroStyle.images}`).append(...this.images);
    this.images[this.index].classList.add(appHeroStyle.active);

    setInterval(() => {
      this.images[this.index].classList.remove(appHeroStyle.active);
      this.index = this.index < this.images.length - 1 ? this.index + 1 : 0;
      this.images[this.index].classList.add(appHeroStyle.active);
    }, 8000);
  }
}

customElements.define('app-hero', AppHero);
