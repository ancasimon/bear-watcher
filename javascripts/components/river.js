import util from '../helpers/util.js';
import awards from './awards.js';
import bearData from '../helpers/data/bearData.js';

const buildBearActivityTable = (activities) => {
    let domString = '';
    if (activities.length > 0) { 
      domString += '<table class="table">';
      domString += '<thead>';
      domString += '<tr>';
      domString += `<th scope="col">Date & Time</th>`;
      domString += `<th scope="col">Result</th>`;
      domString += '</tr>';
      domString += '</thead>';
      domString += '<tbody>';
      for (let i=0; i < activities.length; i++) {
        domString += '<tr>';
        domString += `<td>${moment(activities[i].timestamp).format('MMMM Do YYYY, h:mm:ss a')}</td>`;
        domString += `<td>${activities[i].type}</td>`;
        domString += '</tr>';
      }
      domString += '</tbody>';
      domString += '</table>';
    }
    return domString;
  };

  const trackFailure = (e) => {
    const allBears = bearData.getBears();
    const bearId = e.target.closest('.card').id;
    console.log(bearId);
    const bearPosition = allBears.findIndex((currentBear) => currentBear.id === bearId);
    console.log(allBears[bearPosition]);
    let timestamp = '';
    let type = '';
    let newActivity = {
        timestamp: Date.now(),
        type: "Failure"
      };
    // console.log(newActivity);
    const activities = [];
    allBears[bearPosition].activities.push(newActivity);
    console.log(allBears[bearPosition].activities);
    buildBearActivityTable(allBears[bearPosition].activities);
    console.log('Tried but failed miserably...');
    buildBearSleuth();
  };
    
  const trackSuccess = (e) => {
    const allBears = bearData.getBears();
    const successBearId = e.target.closest('.card').id;
    console.log(successBearId);
    const successBearPosition = allBears.findIndex((currentBear) => currentBear.id === successBearId);
    // console.log(trackedBears[successBearPosition]);
    let timestamp = '';
    let type = '';
    let newActivity = {
        timestamp: Date.now(),
        type: "Success"
      };
    console.log(newActivity);
    // const activities = [];
    allBears[successBearPosition].activities.push(newActivity);
    console.log(allBears[successBearPosition].activities);
    buildBearActivityTable(allBears[successBearPosition].activities);
    allBears[successBearPosition].fishCount += 1;
    console.log('It got a fish!! Yeah!!');
    awards.buildAwards();
    buildBearSleuth();
  };
    
  const bearFailureEvent = () => {
      const triedButtons = document.getElementsByClassName('bear-tried-button');
      for(let i = 0; i < triedButtons.length; i++){
        triedButtons[i].addEventListener('click', trackFailure);
      }
    };
    
  const bearSuccessEvent = () => {
    const gotItButtons = document.getElementsByClassName('bear-caught-fish-button');
    for(let i = 0; i < gotItButtons.length; i++){
      gotItButtons[i].addEventListener('click', trackSuccess);
    }
  };  

const buildBearSleuth = () => {
    const allBears = bearData.getBears();
    let domString = `<h2>Our Sleuth of Bears</h2>`;
    domString += '<hr></hr>';
    domString += '<div class="d-flex flex-wrap">';
    for (let i = 0; i < allBears.length; i++) {
      domString += '<div class="col-md-4 mb-2">';  
        domString += `<div class="card bg-light bear-card shadow-lg p-3 mb-5 bg-white rounded" id=${allBears[i].id}>`;
          domString += `<img src="${allBears[i].imageUrl}" class="card-img-top img-fluid img-thumbnail image" alt="bear-photo">`;
          domString += '<div class="card-body">';
            domString += `<h5 class="card-title">${allBears[i].name}</h5>`;
            domString += `<h4>Got ${allBears[i].fishCount}</h4>`;
            domString += `<button type="button" class="btn btn-outline-warning bear-tried-button mx-3">Tried to...</button>`;
            domString += `<button type="button" class="btn btn-outline-success bear-caught-fish-button mx-3">Got it!!!</button>`;
            domString += '<table class="table">';
            domString += buildBearActivityTable(allBears[i].activities);
            domString += '</table>';
          domString += '</div>';
        domString += '</div>';
      domString += '</div>';
    }
    domString += '</div>';
    util.printToDom('bear-container', domString);
    bearFailureEvent();
    bearSuccessEvent();
};

export default { buildBearSleuth };
