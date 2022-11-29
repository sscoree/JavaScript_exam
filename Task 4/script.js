/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį kreipsis į cars.json failą ir 
atvaizduos visus automobilių gamintojus bei pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.

Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

fetch(ENDPOINT)
.then((response) => response.json())
.then((data) => {
    data.forEach((car) => {
        const brand = document.createElement('h3');
        brand.innerText = car.brand;
        brand.style.padding = "10px";
    
        const models = document.createElement('h4');
        models.innerText = car.models;
        models.style.padding = "10px";

        const carCard = document.createElement('div');
        carCard.style.border = "2px solid black";
        carCard.style.margin = "20px";
        carCard.append(brand,models)

        document.querySelector('#output').append(carCard);
    });
});