import appMainStyle from '../../styles/components/app-main.scss';
import container from '../../styles/container.scss';
import { restaurants } from '../../DATA.json';

class AppMain extends HTMLElement {
  constructor() {
    super();

    this.restaurants = restaurants.map(AppMain.renderCard);

    this.html = `
        <main id="content">
            <div class="${container.lg}">
                <h2 tabindex="0">Browse All Restaurants</h2>
                <div class="${appMainStyle.wrapper}"></div>
            </div>
        </main>
    `;
  }

  static renderCard(restaurant) {
    const article = document.createElement('article');
    const img = document.createElement('img');
    const header = document.createElement('header');
    const title = document.createElement('h3');
    const location = document.createElement('span');
    const rating = document.createElement('div');
    const rate = document.createElement('span');
    const body = document.createElement('section');
    const description = document.createElement('p');

    article.tabIndex = 0;

    img.src = restaurant.pictureId;
    img.alt = restaurant.name;
    img.tabIndex = 0;

    title.innerText = restaurant.name;
    title.tabIndex = 0;

    location.classList.add(appMainStyle.location);
    location.innerText = restaurant.city;
    location.tabIndex = 0;

    rating.classList.add(appMainStyle.rating);
    rating.innerText = 'Rating';
    rating.tabIndex = 0;

    rate.innerText = restaurant.rating;

    description.innerText = restaurant.description;
    description.tabIndex = 0;

    rating.append(rate);
    header.append(title, location, rating);
    body.append(description);
    article.append(img, header, body);
    return article;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = this.html;

    this.querySelector(`.${appMainStyle.wrapper}`).append(...this.restaurants);
  }
}

customElements.define('app-main', AppMain);
