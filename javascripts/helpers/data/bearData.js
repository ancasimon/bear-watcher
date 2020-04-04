import bearForm from '../../components/bearForm.js';
import river from '../../components/river.js';
import util from '../util.js';

const trackedBears = [
    {
        id: 'bear1',
        name: 'Noah',
        imageUrl: '../../../bear-watcher-screenshots/brown-bear-4.jpeg',
        activities: [
          {
            timestamp: "01/01/2020",
            type: "Failure"
          },
          {
            timestamp: "02/01/2020",
            type: "Success"
          }
        ],
        fishCount: 1
    },
    {
        id: 'bear2',
        name: 'Janie',
        imageUrl: '../../../bear-watcher-screenshots/brown-bear-6.jpeg',
        activities: [
          {
            timestamp: "01/01/2020",
            type: "Failure"
          },
          {
            timestamp: "02/01/2020",
            type: "Success"
          }
        ], 
        fishCount: 1
    },
    {
      id: 'bear3',
      name: 'John',
      imageUrl: '../../../bear-watcher-screenshots/brown-bear-0.jpeg',
      activities: [
        {
          timestamp: "02/14/2020",
          type: "Failure"
        },
        {
          timestamp: "02/15/2020",
          type: "Success"
        }
      ], 
      fishCount: 1
  },
  {
    id: 'bear4',
    name: 'Simba',
    imageUrl: '../../../bear-watcher-screenshots/brown-bear-cub.jpeg',
    activities: [
      {
        timestamp: "02/10/2020",
        type: "Success"
      },
      {
        timestamp: "02/11/2020",
        type: "Success"
      }
    ], 
    fishCount: 2
  },
  {
    id: 'bear5',
    name: 'Emma',
    imageUrl: '../../../bear-watcher-screenshots/brown-bear-1.jpeg',
    activities: [
      {
        timestamp: "02/10/2020",
        type: "Failure"
      },
      {
        timestamp: "02/11/2020",
        type: "Failure"
      }
    ], 
    fishCount: 0
  },
  {
    id: 'bear6',
    name: 'William',
    imageUrl: '../../../bear-watcher-screenshots/brown-bear-5.jpeg',
    activities: [
    ], 
    fishCount: 0
  },
  {
    id: 'bear7',
    name: 'Isabella',
    imageUrl: '../../../bear-watcher-screenshots/brown-bear-2.jpeg',
    activities: [
    ], 
    fishCount: 0
  }
];

const getBears = () => {
  return trackedBears;
  console.log("tracked bears", trackedBears);
};

const addBear = (newBearObject) => {
  trackedBears.push(newBearObject);
};

export default { getBears, addBear };
