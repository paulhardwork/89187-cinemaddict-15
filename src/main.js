import {createFilmCardTemplate} from './view/film-card.js';
import {createUserRatingTemplate} from './view/rating.js';

const CARDS_PER_PAGE = 5;

const renderComponent = (container, place, template) => {
  container.insertAdjacentHTML(place, template);
};

const headerElement = document.querySelector('.header');
const filmsListElement = document.querySelector('.main');

for (let i = 0; i < CARDS_PER_PAGE; i++) {
  renderComponent(filmsListElement, 'beforeend', createFilmCardTemplate());
}

renderComponent(headerElement, 'beforeend', createUserRatingTemplate());
