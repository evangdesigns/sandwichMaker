import bread from './bread.js';
import meat from './meat.js';
import cheese from './cheese.js';
import veggie from './veggies.js';
import condi from './condi.js';
import utilities from '../helpers/utilities.js';
let finalOrder = document.getElementById('finalOrder');

const showDiv = () => {
    finalOrder.classList.remove('hide');
};

const createFinalOrder = (sandwich) => {
    let domString = '';
    let domString2 = ''
    let cost = 0;
    showDiv()
    for (let i = 0; i < sandwich.length; i++) {
        domString += `
        <div>
            <h6>${sandwich[i].name}</h6>
            <h6>$${(sandwich[i].price / 100).toFixed(2)}</h6>
        </div>
        `;
        cost += sandwich[i].price;
        domString2 = `
            <h4 class="text-center">TOTAL</h4>
            <h4 class="text-center">$${(cost / 100).toFixed(2)}</h4>
        `; 
    };
    utilities.printToDom('summary', domString);
    utilities.printToDom('orderTotal', domString2);   
};

const createOrderEvent = () => {
    const selectedBreads = bread.getSelectedBreads();
    const selectedMeats = meat.getSelectedMeats();
    const selectedCheeses = cheese.getSelectedCheeses();
    const selectedVeggies = veggie.getSelectedVeggies();
    const selectedCondis = condi.getSelectedCondis();
    const sandwich = selectedBreads.concat(selectedMeats, selectedCheeses, selectedVeggies, selectedCondis);
    createFinalOrder(sandwich)
};

const printOrderButton = () => {
    const domString = `<button id="orderButton" class="btn btn-primary btn-lg btn-block">ORDER</button>`
    utilities.printToDom('orderButton', domString);
    document.getElementById('orderButton').addEventListener('click', createOrderEvent)
};

export default { printOrderButton }