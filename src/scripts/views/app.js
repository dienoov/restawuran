import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({ content }) {
    this.content = content;
  }

  async render() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this.content.innerHTML = await page.render();
    await page.created();
  }
}

export default App;
