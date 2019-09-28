import utilities from '../helpers/utilities.js';

const cheeses =[
    {id:"cheese1",name:"american", price: 50},
    {id:"cheese2",name:"swiss", price: 50},
    {id:"cheese3",name:"provolone", price: 50},
    {id:"cheese4",name:"goat", price: 50},
    {id:"noCheese",name:"none", price: 0}
];

const getSelectedCheeses = () => {
    //get all cheese checkboxes
    const selectedCheeses = []
    //keep the selected cheeses
    const cheeseCheckbox = document.getElementsByClassName('cheese');
    for(let j = 0; j < cheeseCheckbox.length; j++){
        for(let k = 0; k < cheeses.length; k++){
            if(cheeseCheckbox[j].checked && cheeseCheckbox[j].id === cheeses[k].id){
                selectedCheeses.push(cheeses[k]);
            }
        }
    }

    return selectedCheeses;
};

const printCheeseOpt = () => {
    let domString = '';
    for (let i = 0; i < cheeses.length; i++){
    domString +=`
    <div class="form-check">
        <input type="checkbox" class="cheese form-check-input form-checkbox-input" value="${cheeses[i].id}" id="${cheeses[i].id}">
        <label class="form-check-label" for="${cheeses[i].id}">${cheeses[i].name}</label>
    </div>
  `;
    }
    utilities.printToDom('cheeses', domString);
};

export default { printCheeseOpt, getSelectedCheeses };