import appFooterStyle from '../../../styles/components/app-footer.scss';
import container from '../../../styles/container.scss';

import github from '../../../images/icons/icons8-github.svg';
import instagram from '../../../images/icons/icons8-instagram.svg';
import twitter from '../../../images/icons/icons8-twitter.svg';

class AppFooter extends HTMLElement {
  constructor() {
    super();

    this.html = `
        <footer style="display: none">
            <div class="${container.lg}">
                <div class="${appFooterStyle.wrapper}">
                    <div class="${appFooterStyle.social}">
                        <a href="//github.com/dienoov" target="_blank" rel="noopener" title="Github">
                            <img src="${github}" alt="Github">
                        </a>
                        <a href="//instagram.com/dienoov" target="_blank" rel="noopener" title="Instagram">
                            <img src="${instagram}" alt="Instagram">
                        </a>
                        <a href="//twitter.com/dienoov" target="_blank" rel="noopener" title="Twitter">
                            <img src="${twitter}" alt="Twitter">
                        </a>
                    </div>
                    <p>&copy; 2021 Restawuran. All rights reserved</p>
                </div>
            </div>
        </footer>
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = this.html;
  }
}

customElements.define('app-footer', AppFooter);
