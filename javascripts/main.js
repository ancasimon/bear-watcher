import bearForm from './components/bearForm.js';
import river from './components/river.js';
import bearData from './helpers/data/bearData.js';
import awards from './components/awards.js';

const init = () => {
    bearForm.buildBearForm();
    river.buildBearSleuth();
    awards.buildAwards();
    console.log(bearData.setBearsSortedList());
};

init();
