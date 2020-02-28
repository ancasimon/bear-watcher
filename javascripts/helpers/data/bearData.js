import bearForm from '../../components/bearForm.js';
import river from '../../components/river.js';
import util from '../util.js';

const trackedBears = [
    {
        id: 'bear1',
        name: 'John',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTmPgtiWBletu5aEw4Ps7y6kT8GNjBEVoBEvX_0XI8Rm4RIbdFp',
        activities: [
          {
            timestamp: "01/01/2020",
            type: "Failure"
          },
          {
            timestamp: "02/01/2020",
            type: "Success"
          }
        ]
    },
    {
        id: 'bear2',
        name: 'Janie',
        imageUrl: 'data:image/jpeg;base64,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',
        activities: [
          {
            timestamp: "01/01/2020",
            type: "Failure"
          },
          {
            timestamp: "02/01/2020",
            type: "Success"
          }
        ]
    }
];

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

// const addBearActivity = (e) => {
//   const bearId = e.target.id;
//   console.log(bearId);
//   const bearPosition = trackedBears.findIndex((currentBear) => currentBear.id === bearId);
//   console.log(trackedBears[bearPosition]);
//   const activities = [];
//   trackedBears[bearPosition].activities.push(newActivity);
//   console.log(trackedBears[bearPosition].activities);
//   buildBearActivityTable(trackedBears[bearPosition].activities);
//   river.buildBearSleuth();
// };

// const trackFailure = (e) => {
//     let timestamp = '';
//     let type = '';
//     let newActivity = {
//         timestamp: Date.now(),
//         type: "Failure"
//       };
//   addBearActivity();
//     };


const trackFailure = (e) => {
  const bearId = e.target.id;
  console.log(bearId);
  const bearPosition = trackedBears.findIndex((currentBear) => currentBear.id === bearId);
  console.log(trackedBears[bearPosition]);
  let timestamp = '';
  let type = '';
  let newActivity = {
      timestamp: Date.now(),
      type: "Failure"
    };
  // console.log(newActivity);
  const activities = [];
  trackedBears[bearPosition].activities.push(newActivity);
  console.log(trackedBears[bearPosition].activities);
  buildBearActivityTable(trackedBears[bearPosition].activities);
  console.log('Tried but failed miserably...');
  river.buildBearSleuth();
};
  
const trackSuccess = (e) => {
  const successBearId = e.target.id;
  console.log(successBearId);
  const successBearPosition = trackedBears.findIndex((currentBear) => currentBear.id === successBearId);
  // console.log(trackedBears[successBearPosition]);
  let timestamp = '';
  let type = '';
  let newActivity = {
      timestamp: Date.now(),
      type: "Success"
    };
  console.log(newActivity);
  // const activities = [];
  trackedBears[successBearPosition].activities.push(newActivity);
  console.log(trackedBears[successBearPosition].activities);
  buildBearActivityTable(trackedBears[successBearPosition].activities);
  console.log('It got a fish!! Yeah!!');
  river.buildBearSleuth();
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
  
const getBears = () => {
  return trackedBears;
  console.log("tracked bears", trackedBears);
};

const buildNewBear = (e) => {
  e.preventDefault();
  const newBearObject =   {
    id: `bear${trackedBears.length + 1}`,
    name: document.getElementById('bearName').value,
    imageUrl: document.getElementById('bearPhoto').value,
    activities: []
  };
  trackedBears.push(newBearObject);
  console.log(trackedBears);
  document.getElementById('bear-form-fields').reset();
  river.buildBearSleuth(trackedBears);
};

//   QUESTION: DO we need the setNewBear function?? where would we use the setNewBear???? is it needed to prevent anyone changing bear data??
//   const setNewBear = () => {
//       newTrackedBear = newBearObject;
//       console.log('here is our latest find', newTrackedBear);
//   };

export default { buildNewBear, getBears, buildBearActivityTable, bearFailureEvent, bearSuccessEvent };