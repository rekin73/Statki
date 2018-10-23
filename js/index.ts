import {Board} from "./classes";

let Plansza:Board=new Board();

window.onload = () => {
    let container:HTMLElement=document.getElementById("Plansza");
Plansza.getBoard().forEach(element => {
    element.forEach(box => {
        container.appendChild(box);
    });
    
});
}
