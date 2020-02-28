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
            domString += '</div>';
        domString += '</div>';
    }
    domString += '</div>';
    util.printToDom('bear-container', domString);
    bearActivityFailureEvent();
};

const trackFailure = (e) => {
    console.log('tried but failed miserably...');
};

const bearActivityFailureEvent = () => {
    const triedButtons = document.getElementsByClassName('bear-tried-button');
    for(let i = 0; i < triedButtons.length; i++){
      triedButtons[i].addEventListener('click', trackFailure);
    }
  };


export default { buildBearSleuth };