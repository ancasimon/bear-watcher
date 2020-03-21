import river from './river.js';
import util from '../helpers/util.js'; 
import bearData from '../helpers/data/bearData.js';

const buildAwards = () => {
    const allBears = bearData.setBearsSortedList();
    const gold = allBears.slice(0, 1);
    console.log(gold);
    const silver = allBears.slice(1, 2);
    const bronze = allBears.slice(2, 3);
    let domString = '<div class="align-middle shadow-lg p-4 mb-5 bg-white rounded">';
    domString += '<h3>And the award goes to ...</h3>';
    domString += '<div class="row align-items-end" style="height: 200px;">';
    domString += '<div class="col h-75 d-inline-block silver text-center">';
    domString += `<img src="${silver[0].imageUrl}" class="img-thumbnail m-1" width="100" height="100"></img>`;
    domString += `<h6>${silver[0].name} got ${silver[0].fishCount}!</h6>`;
    domString += '</div>';
    domString += '<div class="col h-100 d-inline-block gold text-center">';
    domString += `<img src="${gold[0].imageUrl}" class="img-thumbnail m-1" width="100" height="100"></img>`;
    domString += `<h6>${gold[0].name} got ${gold[0].fishCount}!</h6>`;
    domString += '</div>';
    domString += '<div class="col h-55 d-inline-block bronze text-center">';
    domString += `<img src="${bronze[0].imageUrl}" class="img-thumbnail m-1" width="100" height="100"></img>`;
    domString += `<h6>${bronze[0].name} got ${bronze[0].fishCount}!</h6>`;
    domString += '</div>';
    domString += '</div>';
    domString += '</div>';
    util.printToDom('awards-section', domString);
};

export default { buildAwards };
