import bread from './components/bread.js';
import meat from './components/meat.js';
import cheese from './components/cheese.js';
import veggie from './components/veggies.js';
import condi from './components/condi.js';
import order from './components/order.js';

const init = () => {
    bread.printBreadOpt();
    meat.printMeatOpt();
    cheese.printCheeseOpt();
    veggie.printVeggieOpt();
    condi.printCondiOpt();
    order.printOrderButton();
};

init();
