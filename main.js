"use strict"
let coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];
const listedCoffees = document.querySelector('#coffees');
const submitButton = document.querySelector('#submit');
const roastSelection = document.querySelector('#roast-selection');
const nameSelection = document.querySelector('#name-selection');
let filteredCoffees = [];
submitButton.addEventListener('click', (ev) => {ev.preventDefault()
console.log(`${roastSelection.value}, ${nameSelection.value}`)
let filteredCoffee = {name: nameSelection.value, roast: roastSelection.value}
    filteredCoffees.push(filteredCoffee);
});
roastSelection.addEventListener("input", () => {
    createCoffeeList();
    console.log(roastSelection.value);
});
nameSelection.addEventListener("input", ()=> {
    createCoffeeList();
    console.log(nameSelection.value);
});

// function renderCoffee(coffee) {
//     let html = '<div class="coffee">';
//     // html += '' + coffee.id + '</td>';
//     html += '<h4>' + coffee.name + '</h4>';
//     html += '<p>' + coffee.roast + '</p>';
//     // /html += '</tr>';
//     html += '</div>';
//     return html;
// }
//
// function renderCoffees(coffees) {
//     let html = '';
//     for(let i = 0; i <= coffees.length - 1; i++) {
//         html += renderCoffee(coffees[i]);
//     }
//     return html;
// }
// //for each for the search bar
//
//
//
// function updateCoffees() {// don't submit the form, we just want to update the data
//     if (roastSelection.value === "all"){
//         return listedCoffees.innerHTML = renderCoffees(coffees)
//     }
//     coffees.forEach(function(coffee) {
//         if (coffee.roast === roastSelection.value && nameSelection.value === "") {
//             filteredCoffees.push(coffee);
//         }
//         if (coffee.name.toLowerCase() === nameSelection.value.toLowerCase()) {
//             filteredCoffees = [];
//             filteredCoffees.push(coffee);
//         }
//     });
//     listedCoffees.innerHTML = renderCoffees(filteredCoffees);
// }
function createCoffeeList(){
    let display = coffees.slice();
    let roastValue = roastSelection.value;
    let nameValue = nameSelection.value;
    if ( roastValue !== "all"){
        display = display.filter(function (coffee){
            return coffee.roast ===  roastValue;
        })}
    if (nameValue){
        display = display.filter(function (coffee){
            return coffee.name.toLowerCase().includes(nameValue.toLowerCase());
        })}
    display = display.map(function(coffee){
        return `<div class = 'coffee'>
                    <h1>${coffee.name}</h1>
                    <p>${coffee.roast}</p>
                </div>`
    });
    listedCoffees.innerHTML = display.join("\n");
}
// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide

// listedCoffees.innerHTML = renderCoffees(coffees);



