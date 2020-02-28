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
            domString += '</div>';
        domString += '</div>';
    }
    domString += '</div>';
    util.printToDom('bear-container', domString);
    console.log("adding a bear");
};

export default { buildBearSleuth };