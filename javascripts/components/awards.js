import river from './river.js';
import util from '../helpers/util.js'; 
import bearData from '../helpers/data/bearData.js';

const buildAwards = () => {
    // const allBears = bearData.getBears();
    // for (let i = 0; i < allBears.length; i++) {
    //     const highestCount = Math.max(${allBears[i].fishCount});
    // };
    // console.log(highestCount);
    let domString = '<div class="border border-dark bg-success text-white p-3">';
    domString += `<h2>Awards</h2>`;
    domString += `<h4>GOLD: </h4>`;
    domString += `<h5>SILVER: </h5>`;
    domString += `<h6>BRONZE: </h6>`;
    domString += '</div>';
    util.printToDom('awards-section', domString);
};

export default { buildAwards };