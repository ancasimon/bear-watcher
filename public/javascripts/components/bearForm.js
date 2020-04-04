import awards from './awards.js';
import util from '../helpers/util.js';
import river from './river.js';
import bearData from '../helpers/data/bearData.js';

const alertTextValidation = () => {
    $('#validationTextInput').modal('show');
  };

const buildNewBear = (e) => {
    const allBears = bearData.getBears();
    e.preventDefault();
    if (document.getElementById('bearName').value === '') {
        alertTextValidation();
      } else {
        const newBearObject =   {
            id: `bear${allBears.length + 1}`,
            name: document.getElementById('bearName').value,
            imageUrl: document.getElementById('bearPhoto').value,
            activities: [],
            fishCount: 0
        };
        bearData.addBear(newBearObject);
        awards.buildAwards();
        document.getElementById('bear-form-fields').reset();
        river.buildBearSleuth(allBears);
        }
    };

const buildBearForm = () => {
    let domString = '<div class="shadow-lg p-4 mb-5 bg-white rounded">';
    domString += `<h2>What did you see?</h2>`;
    domString += '<form id="bear-form-fields" class="mx-5 my-5">';
    domString += '<div class="row">';
        domString += '<div class="form-group col-6">';
            domString += `<label for="bearName">Bear Name</label>`;
            domString += `<input type="text" class="form-control" id="bearName" placeholder="Enter the bear's name.">`;
        domString += '</div>';
        domString += '<div class="form-group col-6">';
            domString += `<label for="bearPhoto">Bear Photo</label>`;
            domString += `<input type="text" class="form-control" id="bearPhoto" placeholder="Enter a url for the bear's photo.">`;
        domString += '</div>';
        domString += '</div>';
        domString += '<div class="row">';
            domString += `<button id="bearSubmitButton" type="button" class="btn btn-dark">Submit</button>`;
        domString += '</div>';
    domString += '</form>';
    domString += '</div>';
    util.printToDom('bear-form', domString);
    document.getElementById('bearSubmitButton').addEventListener('click', buildNewBear);
};
  
export default { buildNewBear, buildBearForm };
