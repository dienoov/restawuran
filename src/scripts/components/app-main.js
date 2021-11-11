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
                <h2>Browse All Restaurants</h2>
                <div class="${appMainStyle.wrapper}"></div>
            </div>
        </main>
    `;
  }

  static renderCard(restaurant) {
    const article = document.createElement('article');
    const link = document.createElement('a');
    const img = document.createElement('img');
    const header = document.createElement('header');
    const title = document.createElement('h3');
    const location = document.createElement('span');
    const rating = document.createElement('div');
    const rate = document.createElement('span');
    const body = document.createElement('section');
    const description = document.createElement('p');

    link.href = '#';
    link.title = `View ${restaurant.name} detail`;

    img.src = restaurant.pictureId;
    img.alt = `${restaurant.name} image`;

    title.innerText = restaurant.name;

    location.classList.add(appMainStyle.location);
    location.innerText = restaurant.city;

    rating.classList.add(appMainStyle.rating);
    rating.innerText = 'Rating';

    rate.innerText = restaurant.rating;

    description.innerText = restaurant.description;

    rating.append(rate);
    header.append(title, location, rating);
    body.append(description);
    article.append(img, header, body);
    link.append(article);
    return link;
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
