import bearForm from './components/bearForm.js';
import river from './components/river.js';
import bearData from './helpers/data/bearData.js';

const init = () => {
    bearForm.buildBearForm();
    river.buildBearSleuth();
};

init();