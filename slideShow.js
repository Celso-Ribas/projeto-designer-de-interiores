'use strict';

const images = [
    { id: '1', url: './img/IMG-AMB01.jpg' },
    { id: '2', url: './img/IMG-AMB02.jpg' },
    { id: '3', url: './img/IMG-AMB03.jpg' },
    { id: '4', url: './img/IMG-AMB04.jpg' },
    { id: '5', url: './img/IMG-AMB05.jpg' },
    { id: '6', url: './img/IMG-AMB06.jpg' },
];

const containerItens = document.querySelector ('#container-itens');


const loadImages = (images, container) => {
    images.forEach(image => {
        container.innerHTML += `
            <div class="item">
                <img src="${image.url}">
            </div>
        `;
    });
};



loadImages(images, containerItens);

function getItens() {
    return document.querySelectorAll('.item');
}

const previous = () => { 
    const itens = getItens();
    containerItens.appendChild(itens[0]);
}

const next = () => {
    const itens = getItens();
    const lastItem = itens[itens.length - 1];
    containerItens.insertBefore(lastItem, itens[0]);
}

document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);
