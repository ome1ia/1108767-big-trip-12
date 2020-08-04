"use strict";

import {createMenuTemplate} from './view/menu.js';
import {createFilterTemplate} from './view/filter.js';
import {createSortingTemplate} from './view/sorting.js';
import {createPointEditTemplate} from './view/point-edit.js';
import {createPointTemplate} from './view/point.js';
import {createDayTemplate} from './view/day.js';
import {createPoinstListTemplate} from './view/points-list.js';
import {createSummaryTemplate} from './view/summary.js';
import {createEndPointsTemplate} from './view/end-points.js';
import {createAmountTemplate} from './view/amount.js';

import {render} from './utils/utils.js';

const POINTS_COUNT = 3;

const headerElement = document.querySelector(`.trip-main`);
const controlsElement = headerElement.querySelector(`.trip-controls`);
const controlsTitles = controlsElement.querySelectorAll(`h2`);
const [menuTitleElement, filterTitleElement] = Array.from(controlsTitles);
const siteTripElement = document.querySelector(`.trip-events`);

render(headerElement, createSummaryTemplate(), `afterBegin`);

const tripInfoElement = headerElement.querySelector(`.trip-info`);

render(tripInfoElement, createEndPointsTemplate(), `beforeEnd`);
render(tripInfoElement, createAmountTemplate(), `beforeEnd`);

render(menuTitleElement, createMenuTemplate(), `afterEnd`);
render(filterTitleElement, createFilterTemplate(), `afterEnd`);

render(siteTripElement, createSortingTemplate(), `beforeEnd`);
render(siteTripElement, createPointEditTemplate(), `beforeEnd`);
render(siteTripElement, createPoinstListTemplate(), `beforeEnd`);

const poinstListElement = siteTripElement.querySelector(`.trip-days`);

render(poinstListElement, createDayTemplate(), `beforeEnd`);

const dayElement = poinstListElement.querySelector(`.trip-events__list`);

for (let i = 0; i < POINTS_COUNT; i++) {
  render(dayElement, createPointTemplate(), `beforeEnd`);
}
