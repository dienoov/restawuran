class AppSkip extends HTMLElement {
  constructor() {
    super();

    this.html = '<a href="#content">Skip to Content</a>';

    this.addEventListener('click', AppSkip.toContent);
  }

  static toContent(ev) {
    ev.preventDefault();
    document.getElementById('content').focus();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = this.html;
  }
}

customElements.define('app-skip', AppSkip);

export default AppSkip;
