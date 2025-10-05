/* deklarace konstant, ktere odkazuji na prvky webove stranky podle ID */
const fotka = document.getElementById("fotka");
const kouzelnyText = document.getElementById("kouzelnyText");
const dec = document.getElementById("dec");
const convert = document.getElementById("convert");
const result = document.getElementById("result");

/* Funkce pro vygenerovani nahodne barvy podle RGB */
function randomColour() {
    /* r, g, b - promenne pro jednotlive barevne slozky 
    Math. round() - vestavena funkce, zaokrouhluje
    Math.random() - cislo od 0 do 1 nahodne generovane*/
            let r = Math.round(Math.random() * 255); 
            let g = Math.round(Math.random() * 255);
            let b = Math.round(Math.random() * 255);
            return `rgb(${r}, ${g}, ${b})`;
        }
        //po najeti mysi se obrazek zvetsi 2x
        fotka.addEventListener("mouseover", function() {
            fotka.width *= 2
        }); 
        //po odjeti mysi se obrazek zmensi 2x
        fotka.addEventListener("mouseout", function() {
            fotka.width /= 2
        });
        //vyzve uzivatele k zadani textu, zmeni barvu a velikost textu
        kouzelnyText.addEventListener("click", function() {
    let txt = prompt('Zadej text');
    kouzelnyText.innerHTML = txt ? txt : 'Zadej text:';
    kouzelnyText.style.color = randomColour();
    //nahodna velikost textu od 10 do 50 px
    let x = Math.round(Math.random() * 40 + 10);
    kouzelnyText.style.fontSize = x + "px";
    kouzelnyText.innerHTML += x;
});
//cislo, ketre uzivatel zada do pole, se prevede do BIN, OCT a HEX soustavy
convert.addEventListener("click", function() {
    let decNumber = parseInt(dec.value);
    console.log(decNumber.toString(16));
    result.innerHTML = ` <b>BIN: ${decNumber.toString(2)} <br>
                        <b> OCT: ${decNumber.toString(8)} <br>
                        <b> HEX: ${decNumber.toString(16)} <br>`;
});