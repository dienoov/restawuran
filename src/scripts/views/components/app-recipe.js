import axios from 'axios';
import appRecipeStyle from '../../../styles/components/app-recipe.scss';
import container from '../../../styles/container.scss';

class AppRecipe extends HTMLElement {
  constructor() {
    super();

    this.backgroundColors = ['#9cc3b7', '#bdd8a0', '#f07d69', '#f0bb5d'];

    this.html = `
        <div id="recipe">
            <div class="${container.lg}">
                <div class="${appRecipeStyle.wrapper}">
                    <article>
                        <header>
                            <h2>Random Recipe</h2>
                        </header>
                        <section></section>
                    </article>
                    <figure></figure>
                </div>
            </div>
        </div>
    `;
  }

  get randomBackgroundColor() {
    return this.backgroundColors[Math.floor(Math.random() * this.backgroundColors.length)];
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = this.html;

    axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
      .then(({ data: { meals: [meal] } }) => {
        const img = document.createElement('img');
        const title = document.createElement('h3');
        const instructions = document.createElement('p');
        const link = document.createElement('a');

        img.src = meal.strMealThumb;
        img.alt = meal.strMeal;

        title.innerText = meal.strMeal;

        instructions.innerText = meal.strInstructions.replace(/\n|\r/g, ' ');

        link.innerText = 'View full recipe and method';
        link.href = '#';
        link.title = `View ${meal.strMeal} recipe`;

        this.querySelector('article').append(title, instructions, link);
        this.querySelector('figure').append(img);
      });

    this.style.backgroundColor = this.randomBackgroundColor;
  }
}

customElements.define('app-recipe', AppRecipe);
