import '../../../styles/components/app-error.scss';

class AppError extends HTMLElement {
  constructor() {
    super();

    this.html = `
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="square" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>${this.dataset.msg}</span>
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = this.html;
  }
}

customElements.define('app-error', AppError);

export default AppError;
