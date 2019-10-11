import utilities from '../helpers/utilities.js';

const veggies =[
    {id:"veggie1",name:"Lettuce", price: 50},
    {id:"veggie2",name:"Tomato", price: 50},
    {id:"veggie3",name:"Olives", price: 50},
    {id:"veggie4",name:"Onion", price: 50},
];

const getSelectedVeggies = () => {
    //get all veggie checkboxes
    const selectedVeggies = []
    //keep the selected veggies
    const veggieCheckbox = document.getElementsByClassName('veggie');
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
    };
    domString += `
    <div class="form-check">
        <input type="checkbox" class="cheese form-check-input form-checkbox-input" value="none">
        <label class="form-check-label" for="none">None</label>
    </div>
    `;
    utilities.printToDom('veggies', domString);
};

const none = () => {
    let vItems = getElementsByValue.includes === 'veggie'
    for(var l = 0; i < vItems.length; i++){
        if(vItems[l].type='checkbox')
            vItems[l].checked=false;
    }
document.getElementsByValue("vNone").addEventListener("click", none(vItems));    
}
export default { printVeggieOpt, getSelectedVeggies };