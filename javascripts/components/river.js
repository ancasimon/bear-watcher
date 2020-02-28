import util from '../helpers/util.js';
import bearData from '../helpers/data/bearData.js';

const buildBearSleuth = () => {
    const allBears = bearData.getBears();
    let domString = `<h2>Our Sleuth of Bears</h2>`;
    domString += '<div class="d-flex flex-wrap">';
    for (let i = 0; i < allBears.length; i++) {
        domString += '<div class="card" style="width: 18rem;">';
            domString += `<img src="${allBears[i].imageUrl}" class="card-img-top" alt="bear-photo">`;
            domString += '<div class="card-body">';
                domString += `<h5 class="card-title">${allBears[i].name}</h5>`;
                domString += `<button type="button" class="btn btn-outline-warning bear-tried-button">Tried to...</button>`;
                domString += `<button type="button" class="btn btn-outline-success bear-caught-fish-button">Got it!!!</button>`
                domString += '</div>';
        domString += '</div>';
    }
    domString += '</div>';
    util.printToDom('bear-container', domString);
    bearFailureEvent();
    bearSuccessEvent();
};

const trackFailure = (e) => {
    console.log('tried but failed miserably...');
};

const trackSuccess = (e) => {
    console.log('It got the fish! Yeah!');
};

const bearFailureEvent = () => {
    const triedButtons = document.getElementsByClassName('bear-tried-button');
    for(let i = 0; i < triedButtons.length; i++){
      triedButtons[i].addEventListener('click', trackFailure);
    }
  };

  const bearSuccessEvent = () => {
    const gotItButtons = document.getElementsByClassName('bear-caught-fish-button');
    for(let i = 0; i < gotItButtons.length; i++){
      gotItButtons[i].addEventListener('click', trackSuccess);
    }
  };

export default { buildBearSleuth };