import util from '../helpers/util.js';
import bearData from '../helpers/data/bearData.js';

const buildBearSleuth = () => {
    const allBears = bearData.getBears();
    let domString = `<h2>Our Sleuth of Bears</h2>`;
    domString += '<div class="d-flex flex-wrap">';
    for (let i = 0; i < allBears.length; i++) {
        domString += '<div class="card">';
            domString += `<img src="${allBears[i].imageUrl}" class="card-img-top" alt="bear-photo">`;
            domString += '<div class="card-body">';
                domString += `<h5 class="card-title">${allBears[i].name}</h5>`;
                domString += `<button type="button" class="btn btn-outline-warning bear-tried-button" id=${allBears[i].id}>Tried to...</button>`;
                domString += `<button type="button" class="btn btn-outline-success bear-caught-fish-button" id=${allBears[i].id}>Got it!!!</button>`;
                domString += '<table class="table">';
                domString += bearData.buildBearActivityTable(allBears[i].activities);
                domString += '</table>';
              domString += '</div>';
        domString += '</div>';
    }
    domString += '</div>';
    util.printToDom('bear-container', domString);
    bearData.bearFailureEvent();
    bearData.bearSuccessEvent();
};

export default { buildBearSleuth };