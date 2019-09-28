import utilities from '../helpers/utilities.js';

const veggies =[
    {id:"veggie1",name:"lettuce", price: 50},
    {id:"veggie2",name:"tomato", price: 50},
    {id:"veggie3",name:"olives", price: 50},
    {id:"veggie4",name:"onion", price: 50},
    {id:"noVeggie",name:"none", price: 0}
];

const getSelectedVeggies = () => {
    //get all veggie checkboxes
    const selectedVeggies = []
    //keep the selected veggies
    const veggieCheckbox = document.getElementsById('veggie');
    for(let j = 0; j < veggieCheckbox.length; j++){
        for(let k = 0; k < veggies.length; k++){
            if(veggieCheckbox[j].checked && veggieCheckbox[j].id === veggies[k].id){
                selectedVeggies.push(veggies[k]);
            }
        }
    }

    return selectedVeggies;
};

const printVeggieOpt = () => {
    let domString = '';
    for (let i = 0; i < veggies.length; i++){
    domString +=`
    <div class="form-check">
        <input type="checkbox" class="veggie form-check-input form-checkbox-input" value="${veggies[i].id}" id="${veggies[i].id}">
        <label class="form-check-label" for="${veggies[i].id}">${veggies[i].name}</label>
    </div>
  `;
    }
    utilities.printToDom('veggies', domString);
};

export default { printVeggieOpt, getSelectedVeggies };