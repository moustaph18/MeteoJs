let button = document.querySelector('#changer');
let hidde = true;
let vill ;

let ville = "Dakar"
const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + ville + '&appid=0fb6b8f6c4c3f945f9793a727c2e95c3&units=metric';
    let requete = new XMLHttpRequest();
    requete.open("GET",url);
    requete.responseType="json";
    requete.send();

    requete.onload = function () {
        if (requete.readyState === requete.DONE) {
            if (requete.status ===200) {
                let reponse = requete.response;
                let meteo = reponse.main.temp;
                document.querySelector('#temperature_label').textContent = meteo;
                document.querySelector('#ville').textContent = reponse.name;
                // console.log(reponse);
            }
        }
    }

button.addEventListener('click',() =>{
    let input = document.createElement("input");
    if (hidde==true) {
    // alert("Bienvenue a la meteorie");
    document.body.append(input);
    input.style.padding="20px";
    input.style.paddingLeft="100px";
    input.style.marginLeft="470px";
    input.style.marginTop="30px";
    hidde = false;
    if (hidde==false && button.addEventListener('click',() =>{
        if (input.value!="") {
            vill = input.value;
            const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + vill + '&appid=0fb6b8f6c4c3f945f9793a727c2e95c3&units=metric';
            let requete = new XMLHttpRequest();
            requete.open("GET",url);
            requete.responseType="json";
            requete.send();

            requete.onload = function () {
                if (requete.readyState === requete.DONE) {
                    if (requete.status ===200) {
                        let reponse = requete.response;
                        let meteo = reponse.main.temp;
                        document.querySelector('#temperature_label').textContent = meteo;
                        document.querySelector('#ville').textContent = reponse.name;
                        // console.log(reponse);
                    }else{
                        alert("Il semble que la ville dont vous avez saisie n'est correcte ou n'existe pas");
                    }
                }
            }
            input.value="";
            input.hidden=true;
            hidde=true;
        }
    }));
    
    }
});