import home from './pages/home/home.js';
import cadastrar from './pages/cadastrar/cadastrar.js';
import feed from './pages/feed/feed.js';

const main = document.querySelector('#root');

const init = () => {
  window.addEventListener('hashchange', () => {
    main.innerHTML = '';
    switch (window.location.hash) {
      case '':
        main.appendChild(home());
        break;
      case '#cadastrar':
        main.appendChild(cadastrar());
        break;
      case '#feed':
        main.appendChild(feed());
        break;
      default:
        main.appendChild(home());
    }
  });
};

window.addEventListener('load', () => {
  main.appendChild(home());
  init();
});
