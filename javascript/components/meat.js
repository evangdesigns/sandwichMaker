import utilities from '../helpers/utilities.js';

const meats =[
    {id:"meat1",name:"ham", price: 50},
    {id:"meat2",name:"turkey", price: 50},
    {id:"meat3",name:"tuna", price: 50},
    {id:"meat4",name:"roast beef", price: 50},
    {id:"noMeat",name:"none", price: 0}
];

const getSelectedMeats = () => {
    //get all meat checkboxes
    const selectedMeats = []
    //keep the selected meats
    const meatCheckbox = document.getElementsByClassName('meat');
    for(let j = 0; j < meatCheckbox.length; j++){
        for(let k = 0; k < meats.length; k++){
            if(meatCheckbox[j].checked && meatCheckbox[j].id === meats[k].id){
                selectedMeats.push(meats[k]);
            }
        }
    }

    return selectedMeats;
};

const printMeatOpt = () => {
    let domString = '';
    for (let i = 0; i < meats.length; i++){
    domString +=`
    <div class="form-check">
        <input type="checkbox" class="meat form-check-input form-checkbox-input" value="${meats[i].id}" id="${meats[i].id}">
        <label class="form-check-label" for="${meats[i].id}">${meats[i].name}</label>
    </div>
  `;
    }
    utilities.printToDom('meats', domString);
};

export default { printMeatOpt, getSelectedMeats };