import appHeroStyle from '../../../styles/components/app-hero.scss';
import heroImageSmall1 from '../../../images/responsive/heros/hero-image_1-small.jpg';
import heroImageMedium1 from '../../../images/responsive/heros/hero-image_1-medium.jpg';
import heroImageLarge1 from '../../../images/responsive/heros/hero-image_1-large.jpg';
import heroImageSmall2 from '../../../images/responsive/heros/hero-image_2-small.jpg';
import heroImageMedium2 from '../../../images/responsive/heros/hero-image_2-medium.jpg';
import heroImageLarge2 from '../../../images/responsive/heros/hero-image_2-large.jpg';
import heroImageSmall3 from '../../../images/responsive/heros/hero-image_3-small.jpg';
import heroImageMedium3 from '../../../images/responsive/heros/hero-image_3-medium.jpg';
import heroImageLarge3 from '../../../images/responsive/heros/hero-image_3-large.jpg';
import heroImageSmall4 from '../../../images/responsive/heros/hero-image_4-small.jpg';
import heroImageMedium4 from '../../../images/responsive/heros/hero-image_4-medium.jpg';
import heroImageLarge4 from '../../../images/responsive/heros/hero-image_4-large.jpg';

const images = [
  { small: heroImageSmall1, medium: heroImageMedium1, large: heroImageLarge1 },
  { small: heroImageSmall2, medium: heroImageMedium2, large: heroImageLarge2 },
  { small: heroImageSmall3, medium: heroImageMedium3, large: heroImageLarge3 },
  { small: heroImageSmall4, medium: heroImageMedium4, large: heroImageLarge4 },
];

class AppHero extends HTMLElement {
  constructor() {
    super();

    this.images = images.map((image) => {
      const picture = document.createElement('picture');
      const small = document.createElement('source');
      const medium = document.createElement('source');
      const img = document.createElement('img');

      small.media = '(max-width: 576px)';
      small.dataset.srcset = image.small;

      medium.media = '(max-width: 992px)';
      medium.dataset.srcset = image.medium;

      img.dataset.src = image.large;
      img.alt = 'hero';
      img.width = 1920;
      img.height = 500;
      img.classList.add('lazyload');

      picture.append(small, medium, img);

      return picture;
    });

    this.index = 0;

    this.html = `
        <div id="hero">
            <div id="hero-images" class="${appHeroStyle.images}"></div>
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

    document.getElementById('hero-images').append(...this.images);
    this.images[this.index].classList.add(appHeroStyle.active);

    setInterval(() => {
      this.images[this.index].classList.remove(appHeroStyle.active);
      this.index = this.index < this.images.length - 1 ? this.index + 1 : 0;
      this.images[this.index].classList.add(appHeroStyle.active);
    }, 8000);
  }
}

customElements.define('app-hero', AppHero);
