/*
    Consegna:
    Dato un array di oggetti letterali con:
    - url dell’immagine
    - titolo
    - descrizione
    Creare un carosello come nella foto allegata.
    Milestone 0:
    Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l’immagine grande in modo da poter stilare lo slider.
    Milestone 1:
    Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
    Al click dell’utente sulle frecce verso sinistra o destra, l’immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
    Milestone 2:
    Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l’utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l’ultima e viceversa per l’ultima miniatura se l’utente clicca la freccia verso sinistra.
    BONUS 1:
    Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
    BONUS 2:
    Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
    BONUS 3:
    Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay. 
*/

const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];




/*  COPIA DEL VECCHIO PROGETTO */
const sliderDom = document.querySelector('#slider');
let sliderString = "";
let thumbnailsStringImg = "";

for(let i=0; i<images.length; i++){
    const image_object = images[i];
    if(i==0){
        sliderString += `<div class="img-container show"><img src="${image_object['image']}">`;
    } else {
        sliderString += `<div class="img-container"><img src="${image_object['image']}">`;
    }

    sliderString +=    `<div class="description-img"><h3>${image_object['title']}</h3><span>${image_object['text']}</span></div></div>`;
    thumbnailsStringImg +=  `<div class="thumb-img"><div class="border-container border-img"></div><img class="img-ref" src="${image_object['image']}"></div>`;
}

thumbnailsStringImg = "<div class=\"img-thumb-container\">"+thumbnailsStringImg+"</div>";


sliderString += `<div class="container-thumbnails">
                    <div class="thumb-contents">
                        ${thumbnailsStringImg}
                        <div id="up" class="arrow"><i class="fa-solid fa-angle-up"></i></div>
                        <div id="down" class="arrow"><i class="fa-solid fa-angle-down"></i></div>
                    </div>
                </div>`;
sliderDom.innerHTML = sliderString;

const upArrowDom = document.querySelector('#up');
const downArrowDom = document.querySelector('#down');

const imgContainerDom = document.getElementsByClassName('img-container');
const imgFilterDom = document.getElementsByClassName('img-ref');
const imgBorderDom = document.getElementsByClassName('border-container');

/* Posso modificare le classi a partire da imgContainerDom in questo modo:
    imgContainerDom[i].classList.add('className');
*/

let currentImage = 0;

upArrowDom.addEventListener('click', function(){
    imgContainerDom[currentImage].classList.remove('show');

    imgBorderDom[currentImage].classList.remove('border-img');
    imgFilterDom[currentImage].classList.add('filter-img');

    if(currentImage > 0){
        currentImage--;
    } else {
        currentImage = imgContainerDom.length-1;
    }
    imgContainerDom[currentImage].classList.add('show');

    imgFilterDom[currentImage].classList.remove('filter-img');
    imgBorderDom[currentImage].classList.add('border-img');

});

downArrowDom.addEventListener('click', function(){
    imgContainerDom[currentImage].classList.remove('show');

    
    imgBorderDom[currentImage].classList.remove('border-img');
    imgFilterDom[currentImage].classList.add('filter-img');

    if(currentImage < imgContainerDom.length-1){
        currentImage++;
    } else {
        currentImage = 0;
    }
    imgContainerDom[currentImage].classList.add('show');

    imgFilterDom[currentImage].classList.remove('filter-img');
    imgBorderDom[currentImage].classList.add('border-img');
});

/*  FINE COPIA DEL VECCHIO PROGETTO */