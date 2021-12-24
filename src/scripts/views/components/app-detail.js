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

  static restaurantReview(div, review) {
    return `${div}
            <div>
                <h4>${review.name}</h4>
                <time>${review.date}</time>
                <p>${review.review}</p>
            </div>`;
  }

  static restaurantDetail(restaurant) {
    const imageSmall = DicodingRestaurant.image(DicodingRestaurant.IMAGE_SMALL, restaurant.pictureId);
    const imageMedium = DicodingRestaurant.image(DicodingRestaurant.IMAGE_MEDIUM, restaurant.pictureId);
    const imageLarge = DicodingRestaurant.image(DicodingRestaurant.IMAGE_LARGE, restaurant.pictureId);

    const foods = restaurant.menus.foods.reduce(this.restaurantMenu, document.createElement('ul'));
    const drinks = restaurant.menus.drinks.reduce(this.restaurantMenu, document.createElement('ul'));

    const reviews = restaurant.customerReviews.reduce(this.restaurantReview, '');

    return `
        <article>
            <header>
                <h1>${restaurant.name}</h1>
                <picture>
                    <source media="(max-width: 576px)" data-srcset="${imageSmall}">
                    <source media="(max-width: 992px)" data-srcset="${imageMedium}">
                    <img data-src="${imageLarge}" alt="${restaurant.name}" class="lazyload">
                </picture>
            </header>
            <section class="${appDetailStyle.info}">
                <h3>${restaurant.city}</h3>
                <span class="${appDetailStyle.address}">${restaurant.address}</span>
                <div class="${appDetailStyle.rating}">Rating<span>${restaurant.rating}</span></div>
            </section>
            <button id="favorite" aria-label="Add to favorite">Add to favorite</button>
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
            <section class="${appDetailStyle.review}">
                <form id="form-review">
                    <h2>Write a Review</h2>
                    <input type="hidden" id="field-id" value="${restaurant.id}">
                    <label for="field-name">Name</label>
                    <input type="text" id="field-name" placeholder="Enter your name" required>
                    <label for="field-review">Review</label>
                    <textarea id="field-review" rows="5" placeholder="Write your review" required></textarea>
                    <input type="submit" value="Submit">
                </form>
                <div id="reviews" class="${appDetailStyle.reviews}">
                    ${reviews}
                </div>
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
