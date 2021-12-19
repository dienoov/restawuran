import '../../../styles/components/app-loading.scss';

class AppLoading extends HTMLElement {
  constructor() {
    super();

    this.html = `
        <div></div>
        <span>Getting your restaurant ready...</span>
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = this.html;
  }
}

customElements.define('app-loading', AppLoading);

export default AppLoading;
