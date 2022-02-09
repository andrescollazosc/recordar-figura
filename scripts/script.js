import { randomFruits } from "./fruit-script.js";

const containerFruits = document.getElementById('container-fruits');
const points = document.getElementById('points');
const resetGame = document.getElementById('reset-game');
const message = document.getElementById('message');

const ICON_SALAD = '🥙';
const POINTS = 100;

let allFruits = randomFruits();
let fruitElement;
let counterPoints = 0;

const drawFruits = () => {
    for (let index = 0; index < allFruits.length; index++) {
        createElementFruit();
        containerFruits.appendChild(fruitElement);        
    }
}

function createElementFruit() {
    fruitElement = document.createElement('div');
    fruitElement.classList.add('fruit');
    fruitElement.textContent = ICON_SALAD;
}

drawFruits();

let firstEelemnt, secondElement;

function getNewFruit(element, indexElement) {
    const newFruit = allFruits[indexElement];

    if (element.textContent != ICON_SALAD) {
        return;    
    }

    element.textContent = newFruit;

    if (firstEelemnt != null) {
        secondElement = element;
    } else {
        firstEelemnt = element;        
    }

    setTimeout(() => {
        validateElements(element);
    }, 1150);
    validateAllGame();
}

function validateElements() {    
    if (!secondElement) {
        return;
    }

    if (firstEelemnt.textContent != secondElement.textContent) {
        firstEelemnt.textContent = ICON_SALAD;
        secondElement.textContent = ICON_SALAD;
    } else {
        counterPoints = counterPoints + POINTS;
        points.textContent = counterPoints;
    }

    firstEelemnt = null;
    secondElement = null;
}

function validateAllGame() {
    let counterFigures = 0;
    const lengthArray = containerFruits.childNodes.length;

    for (let index = 0; index < lengthArray; index++) {
        const element = containerFruits.childNodes[index];
        if (element.textContent != ICON_SALAD) {
            counterFigures ++;    
        }
    }

    if (lengthArray == counterFigures) {
        message.classList.remove('hidden-message');       
    }
    
}

function clearGame() {
    counterPoints = 0;
    points.textContent = counterPoints;
    allFruits = randomFruits();
    containerFruits.querySelectorAll('.fruit').forEach((item, index) => {
        item.textContent = ICON_SALAD;
    });

    if (!message.classList.contains('hidden-message')) {
        message.classList.add('hidden-message')
    }
    
}

containerFruits.querySelectorAll('.fruit').forEach((item, index) => {
    item.addEventListener('click', event => {
        getNewFruit(item, index);
    });
});

resetGame.addEventListener('click', clearGame);