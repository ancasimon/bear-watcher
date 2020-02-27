// import bearData from '../helpers/data/bearData.js';
import util from '../helpers/util.js';
import river from './river.js';

const trackedBears = [];

const buildNewBear = (e) => {
    e.preventDefault();
    const newBearObject =   {
      id: `bear${trackedBears.length + 1}`,
      name: document.getElementById('bearName').value,
      imageUrl: document.getElementById('bearPhoto').value
    };
    trackedBears.push(newBearObject);
    console.log(trackedBears);
    document.getElementById('bear-form-fields').reset();
    river.buildBearSleuth();
  };

const buildBearForm = () => {
    let domString = '';
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
    document.getElementById('bearSubmitButton').addEventListener('click', buildNewBear);
};

export default { buildBearForm };