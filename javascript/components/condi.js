import utilities from '../helpers/utilities.js';

const condis =[
    {id:"condi1",name:"Ketchup",price: 50},
    {id:"condi2",name:"Mayo",price: 50},
    {id:"condi3",name:"Mustard", price: 50},
    {id:"condi4",name:"Secret Sauce",price: 50},
];

const getSelectedCondis = () => {
    //get all condi checkboxes
    const selectedCondis = []
    //keep the selected condis
    const condiCheckbox = document.getElementsByClassName("condi");
    for(let j = 0; j < condiCheckbox.length; j++){
        for(let k = 0; k < condis.length; k++){
            if(condiCheckbox[j].checked && condiCheckbox[j].id === condis[k].id){
                selectedCondis.push(condis[k]);
            }
        }
    }

    return selectedCondis;
};

const printCondiOpt = () => {
    let domString = '';
    for (let i = 0; i < condis.length; i++){
    domString +=`
    <div class="form-check">
        <input type="checkbox" class="condi form-check-input form-checkbox-input" value="${condis[i].id}" id="${condis[i].id}">
        <label class="form-check-label" for="${condis[i].id}">${condis[i].name}</label>
    </div>
  `;
  };
  domString += `
    <div class="form-check">
        <input type="checkbox" class="cheese form-check-input form-checkbox-input" value="none">
        <label class="form-check-label" for="none">None</label>
    </div>
    `;
    utilities.printToDom('condis', domString);
};

export default { printCondiOpt, getSelectedCondis };