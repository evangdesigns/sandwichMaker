import utilities from '../helpers/utilities.js';

const breads =[
    {id:"bread1",name:"White", price: 300},
    {id:"bread2",name:"Wheat", price: 300},
    {id:"bread3",name:"Honey Oat", price: 300},
    {id:"bread4",name:"Penicillin", price: 300},
];

const getSelectedBreads = () => {
    //get all bread checkboxes
    const selectedBreads = []
    //keep the selected breads
    const breadRadio = document.getElementsByClassName('bread');
    for(let j = 0; j < breadRadio.length; j++){
        for(let k = 0; k < breads.length; k++){
            if(breadRadio[j].checked && breadRadio[j].id === breads[k].id){
                selectedBreads.push(breads[k]);
            }
        }
    }

    return selectedBreads;
};

const printBreadOpt = () => {
    let domString = '';
    for (let i = 0; i < breads.length; i++){
    domString +=`
    <div class="form-check">
        <input class="form-check-input bread" type="radio" name="breads" id="${breads[i].id}" value="${breads[i].id}">
        <label class="form-check-label" for="${breads[i].id}">${breads[i].name}</label>
    </div>
  `;
    }
    utilities.printToDom('breads', domString);
    //place "checked" on the first <input> tag
  
};

export default { printBreadOpt, getSelectedBreads };