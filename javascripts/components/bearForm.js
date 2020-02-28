// import bearData from '../helpers/data/bearData.js';
import util from '../helpers/util.js';
import river from './river.js';
import bearData from '../helpers/data/bearData.js';

const buildBearForm = () => {
    let domString = `<h2>What did you see?</h2>`;
    domString += '<form id="bear-form-fields" class="row mx-5 my-5">';
        domString += '<div class="form-group col-6">';
            domString += `<label for="bearName">Bear Name</label>`;
            domString += `<input type="text" class="form-control" id="bearName" placeholder="Enter the bear's name.">`;
        domString += '</div>';
        domString += '<div class="form-group col-6">';
            domString += `<label for="bearPhoto">Bear Photo</label>`;
            domString += `<input type="text" class="form-control" id="bearPhoto" placeholder="Enter the url for the bear's photo.">`;
        domString += '</div>';
        domString += '<div class="row">';
            domString += `<button id="bearSubmitButton" type="button" class="btn btn-dark">Submit</button>`;
        domString += '</div>';
    domString += '</form>';
    util.printToDom('bear-form', domString);
    document.getElementById('bearSubmitButton').addEventListener('click', bearData.buildNewBear);
};

export default { buildBearForm };