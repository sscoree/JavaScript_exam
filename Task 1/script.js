/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: rezultatas turi būti matomas pateikus formą ir atvaizduojamas
<div id="output"></div> viduje. Gautus atsakymus stilizuokite naudojant CSS;
------------------------------------------------------------------- */

const output = document.querySelector("#output");

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    output.textContent = "";
    const input = e.target.search.value;
    const outputRow1 = document.createElement('div');
    outputRow1.innerHTML = `Your weight is ${Math.round(input * 2.2046)} lbs`;

    const outputRow2 = document.createElement('div');
    outputRow2.innerHTML = `Your weight is ${Math.round(input / 0.001)} grams`;

    const outputRow3 = document.createElement('div');
    outputRow3.innerHTML = `Your weight is ${Math.round(input * 35.274)} oz`;

    output.append(outputRow1, outputRow2, outputRow3);
})
