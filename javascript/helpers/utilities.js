const printToDom = (divId, toPrint) => {
    document.getElementById(divId).innerHTML = toPrint;
  };


//event listener, listening for the click of "none" === checked

//uncheck all within
// const clearChecked = (e) => {
//   let items = document.getElementsId(e.target.id)
//   for (let i = 0; i < 4; i++) {
//       if (items[i].type == 'checkbox')
//           items[i].checked = false;
//   }
// };

// const noneClicks = () => {
//   document.getElementById('none').addEventListener('click', clearChecked);
// } ;
export default { printToDom};