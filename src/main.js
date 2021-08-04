import {createFilmCardTemplate} from './view/film-card.js';
import {createUserRatingTemplate} from './view/rating.js';
import {createShowMoreButton} from './view/show-button.js';
import {createPopupFilmInfo} from './view/popup.js';
import {createUserMenuTemplate} from './view/main-menu.js';

const CARDS_PER_PAGE = 5;
const CARDS_ANY_SECTIONS = 2;

const headerElement = document.querySelector('.header');
const mainElement = document.querySelector('.main');
const bodyElement = document.querySelector('body');

const createMainContentWrappers = () => (`
  <section class="films">
    <section class="films-list">
      <div class="films-list__container"></div>
    </section>
    <section class="films-list films-list--extra">
      <h2 class="films-list__title">Top rated</h2>
      <div class="films-list__container"></div>
    </section>
    <section class="films-list films-list--extra">
      <h2 class="films-list__title">Most commented</h2>
      <div class="films-list__container"></div>
    </section>
  </section>`
);

const renderComponent = (container, place, template) => {
  container.insertAdjacentHTML(place, template);
};

renderComponent(headerElement, 'beforeend', createUserRatingTemplate());
renderComponent(mainElement, 'beforeend', createUserMenuTemplate());
renderComponent(mainElement, 'beforeend', createMainContentWrappers());

const filmsContainer = document.querySelector('.films');
const filmsList = filmsContainer.querySelector('section:nth-of-type(1)');
const topRatedList = filmsContainer.querySelector('section:nth-of-type(2)');
const mostCommentedList = filmsContainer.querySelector('section:nth-of-type(3)');

const filmsListWrapper = filmsList.querySelector('.films-list__container');
const topRatedWrapper = topRatedList.querySelector('.films-list__container');
const mostCommentedWrapper = mostCommentedList.querySelector('.films-list__container');

renderComponent(filmsList, 'beforeend', createShowMoreButton());

for (let i = 0; i < CARDS_PER_PAGE; i++) {
  renderComponent(filmsListWrapper, 'beforeend', createFilmCardTemplate());
}

for (let i = 0; i < CARDS_ANY_SECTIONS; i++) {
  renderComponent(topRatedWrapper, 'beforeend', createFilmCardTemplate());
  renderComponent(mostCommentedWrapper, 'beforeend', createFilmCardTemplate());
}

renderComponent(bodyElement, 'beforeend', createPopupFilmInfo());


