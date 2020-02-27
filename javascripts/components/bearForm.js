// import bearData from '../helpers/data/bearData.js';
import util from '../helpers/util.js';

const bearFormBuilder = () => {
    let domString = '';
    domString += '<form class="mx-5 my-5">';
        domString += '<div class="row">';
            domString += '<div class="form-group col-6">';
                domString += `<label for="bear-name">Bear Name</label>`;
                domString += `<input type="text" class="form-control" id="bear-name" placeholder="Enter the bear's name.">`;
            domString += '</div>';
            domString += '<div class="form-group col-6">';
                domString += `<label for="bear-photo">Bear Photo</label>`;
                domString += `<input type="text" class="form-control" id="bear-photo" placeholder="Enter the url for the bear's photo.">`;
            domString += '</div>';
        domString += '</div>';
        domString += '<div class="row">';
            domString += `<button id="submit-bear-button" type="button" class="btn btn-dark">Submit</button>`;
        domString += '</div>';
    domString += '</form>';
    util.printToDom('bear-form', domString);
};

export default { bearFormBuilder };