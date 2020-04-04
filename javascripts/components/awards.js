import river from './river.js';
import util from '../helpers/util.js'; 
import bearData from '../helpers/data/bearData.js';

const groupBy = (objectArray, property) => {
    return objectArray.reduce(function (acc, obj) {
      let key = obj[property]
      if(!acc[key]) {
        acc[key] = []
      }
      acc[key].push(obj)
      return acc
    }, {})
  };

const buildAwards = () => {
    const bears = bearData.getBears();
    let groupedList = groupBy(bears, 'fishCount');
    let goldBears = Object.values(groupedList)[Object.values(groupedList).length - 1];
    let silverBears = Object.values(groupedList)[Object.values(groupedList).length - 2];
    let bronzeBears = Object.values(groupedList)[Object.values(groupedList).length - 3];
    let domString = '<div class="align-middle shadow-lg p-4 mb-5 bg-white rounded">';
    domString += '<h3>And the award goes to ...</h3>';
    domString += '<div class="row align-items-end" style="height: 200px;">';
    domString += '<div class="col h-75 d-inline-block silver text-center">';
    for (let i=0; i<silverBears.length; i++) {
        domString += `<h5 class="font-italic">${silverBears[i].name} got ${silverBears[i].fishCount}!</h5>`;
    };
    domString += '</div>';
    domString += '<div class="col h-100 d-inline-block gold text-center">';
    for (let i=0; i<goldBears.length; i++) {
        domString += `<h5 class="font-italic">${goldBears[i].name} got ${goldBears[i].fishCount}!</h5>`;
    };
    domString += '</div>';
    domString += '<div class="col h-55 d-inline-block bronze text-center">';
    for (let i=0; i<bronzeBears.length; i++) {
        domString += `<h5 class="font-italic">${bronzeBears[i].name} got ${bronzeBears[i].fishCount}!</h5>`;
    };
    domString += '</div>';
    domString += '</div>';
    domString += '</div>';
    util.printToDom('awards-section', domString);
};

export default { buildAwards };
