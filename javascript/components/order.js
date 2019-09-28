import bread from './bread.js';
import meat from './meat.js';
import cheese from './cheese.js';
import veggie from './veggies.js';
import condi from './condi.js';
import utilities from '../helpers/utilities.js';

const createFinalOrder = (items) => {
    let domString2 = '<div class="container">';
    for (let i = 0; i < items.length; i++) {
        domString2 += `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <div>
                <h5>${items[i].name}</h5>
            </div>
            <div>
                <h5>$${(items[i].price / 100).toFixed(2)}</h5>
            </div>
        </li>
        `;
    };
    let cost = 0;
    for (let j = 0; j < items.length; j++) {
        cost += items[j].price;
    };
    domString2 += `
        <li id="total-cost" class="list-group-item d-flex justify-content-between align-items-center">
            <div>
                <h4 class="text-center">TOTAL</h4>
            </div>
            <div>
                <h4 class="text-center">$${(cost / 100).toFixed(2)}</h4>
            </div>
        </li>
        `;
    domString2 += '/div>';
    utilities.printToDom('finalOrder', domString2);
};

const createOrderEvent = () => {
    const selectedBreads = bread.getSelectedBreads();
    const selectedMeats = meat.getSelectedMeats();
    const selectedCheeses = cheese.getSelectedCheeses();
    const selectedVeggies = veggie.getSelectedVeggies();
    const selectedCondis = condi.getSelectedCondis();
    const sandwich = selectedBreads.concat(selectedMeats, selectedCheeses, selectedVeggies, selectedCondis);
    createFinalOrder(sandwich)
}

const printOrderButton = () => {
    const domString = `<button id="orderButton" class="btn btn-primary justify-content-center expanded">Order</button>`
    utilities.printToDom('finalOrder', domString);
    document.getElementById('orderButton').addEventListener('click', createOrderEvent)
};

export default { printOrderButton }