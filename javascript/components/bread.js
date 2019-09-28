import utilities from '../helpers/utilities.js';

const breads =[
    {id:"bread1",name:"white", price: 300},
    {id:"bread2",name:"wheat", price: 300},
    {id:"bread3",name:"honey oat", price: 300},
    {id:"bread4",name:"penicillin", price: 300},
];

const getSelectedBreads = () => {
    //get all bread checkboxes
    const selectedBreads = []
    //keep the selected breads
    const breadCheckbox = document.getElementsByClassName('bread');
    for(let j = 0; j < breadCheckbox.length; j++){
        for(let k = 0; k < breads.length; k++){
            if(breadCheckbox[j].checked && breadCheckbox[j].id === breads[k].id){
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
    <div class="form-group form-check">
        <input type="radio" class="bread form-check-input" id="${breads[i].id}">
        <label class="form-check-label" for="${breads[i].id}">${breads[i].name} ($${(breads[i].price/100)})</label>
    </div>
  `;
    }
    utilities.printToDom('breads', domString);
};

export default { printBreadOpt, getSelectedBreads };