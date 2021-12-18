import appDetailStyle from '../../../styles/components/app-detail.scss';
import container from '../../../styles/container.scss';
import DicodingRestaurant from '../../globals/dicoding-restaurant/dicoding-restaurant';

class AppDetail extends HTMLElement {
  constructor() {
    super();

    this.html = `<div id="restaurant" class="${container.lg}"></div>`;
  }

  static restaurantMenu(ul, menu) {
    const item = document.createElement('li');
    item.innerText = menu.name;
    ul.append(item);
    return ul;
  }

  static restaurantDetail(restaurant) {
    const imgUrl = DicodingRestaurant.image(DicodingRestaurant.IMAGE_LARGE, restaurant.pictureId);

    const foods = restaurant.menus.foods.reduce(this.restaurantMenu, document.createElement('ul'));
    const drinks = restaurant.menus.drinks.reduce(this.restaurantMenu, document.createElement('ul'));

    return `
        <article>
            <header>
                <h1>${restaurant.name}</h1>
                <img src="${imgUrl}" alt="${restaurant.name}">
            </header>
            <section class="${appDetailStyle.info}">
                <h3>${restaurant.city}</h3>
                <span class="${appDetailStyle.address}">${restaurant.address}</span>
                <div class="${appDetailStyle.rating}">Rating<span>${restaurant.rating}</span></div>
            </section>
            <button aria-label="Add to favorite">Add to favorite</button>
            <section class="${appDetailStyle.description}">
                <h2>Description</h2>
                <p>${restaurant.description}</p>
            </section>
            <section class="${appDetailStyle.menu}">
                <h2>Menu</h2>
                <ul>
                    <li><h3>Foods</h3>${foods.outerHTML}</li>
                    <li><h3>Drinks</h3>${drinks.outerHTML}</li>
                </ul>
            </section>
        </article>
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = this.html;
  }
}

customElements.define('app-detail', AppDetail);

export default AppDetail;
