/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizduojama <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

document.querySelector('#btn').addEventListener('click', () => {
    fetch(ENDPOINT)
    .then((response) => response.json())
    .then((data) => {
        document.querySelector('#message').textContent = '';

        data.forEach((user) => {
            const login = document.createElement('h3');
            login.innerText = user.login;
            login.style.marginBottom = "10px";
        
            const avatar = document.createElement('img');
            avatar.src = user.avatar_url;
            avatar.style.width = "200px";
            avatar.style.height = "200px";

            const userCard = document.createElement('div');
            userCard.style.display = "inline-block";
            userCard.style.padding = "20px";

            userCard.append(login,avatar);

            document.querySelector('#output').append(userCard);
        });
    });
});
