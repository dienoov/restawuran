import appRecipeStyle from '../../../styles/components/app-recipe.scss';
import container from '../../../styles/container.scss';

class AppRecipe extends HTMLElement {
  constructor() {
    super();

    this.backgroundColors = ['#9cc3b7', '#bdd8a0', '#f07d69', '#f0bb5d'];

    this.html = `
        <div class="${container.lg}">
            <div id="recipe" class="${appRecipeStyle.wrapper}"></div>
        </div>
    `;
  }

  get randomBackgroundColor() {
    return this.backgroundColors[Math.floor(Math.random() * this.backgroundColors.length)];
  }

  connectedCallback() {
    this.render();
  }

  static recipeCard(meal) {
    const article = document.createElement('article');
    const header = document.createElement('header');
    const heading = document.createElement('h2');
    const section = document.createElement('section');
    const figure = document.createElement('figure');
    const img = document.createElement('img');
    const title = document.createElement('h3');
    const instructions = document.createElement('p');
    const link = document.createElement('a');

    heading.innerText = 'Random Recipe';

    img.dataset.src = meal.strMealThumb;
    img.alt = meal.strMeal;
    img.classList.add('lazyload');

    title.innerText = meal.strMeal;

    instructions.innerText = meal.strInstructions.replace(/\n|\r/g, ' ');

    link.innerText = 'View full recipe and method';
    link.href = '#';
    link.title = `View ${meal.strMeal} recipe`;

    header.append(heading);
    section.append(title, instructions, link);
    article.append(header, section);
    figure.append(img);

    return [article, figure];
  }

  render() {
    this.innerHTML = this.html;
    this.style.backgroundColor = this.randomBackgroundColor;
  }
}

customElements.define('app-recipe', AppRecipe);

export default AppRecipe;
