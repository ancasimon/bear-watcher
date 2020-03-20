import river from './river.js';
import util from '../helpers/util.js'; 
import bearData from '../helpers/data/bearData.js';

const buildAwards = () => {
    const allBears = bearData.setBearsSortedList();
    const gold = allBears.slice(0, 1);
    console.log(gold);
    const silver = allBears.slice(1, 2);
    const bronze = allBears.slice(2, 3);
    let domString = '<div class="align-middle">';
    domString += '<h3>And the award goes to ...</h3>';
    domString += '<div class="row align-items-end" style="height: 200px;">';
    domString += '<div class="col h-75 d-inline-block silver text-center">';
    domString += `<img src="${gold.imageUrl}" class="img-thumbnail m-1" width="100" height="100"></img>`;
    domString += `<h4>${gold.name}</h4>`;
    domString += '</div>';
    domString += '<div class="col h-100 d-inline-block gold text-center">';
    domString += `<img src="${silver.imageUrl}" class="img-thumbnail m-1" width="100" height="100"></img>`;
    domString += `<h4>${silver.name}</h4>`;
    domString += '</div>';
    domString += '<div class="col h-55 d-inline-block bronze text-center">';
    domString += `<img src="${bronze.imageUrl}" class="img-thumbnail m-1" width="100" height="100"></img>`;
    domString += `<h4>${bronze.name}</h4>`;
    domString += '</div>';
    domString += '</div>';
    domString += '</div>';
    util.printToDom('awards-section', domString);
};

export default { buildAwards };
