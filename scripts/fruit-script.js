function getFruits() {    
    // return ['🍎', '🍎', '🍊', '🍊', '🍋', '🍋', '🥥', '🥥', '🥝', '🥝', '🍇', '🍇', '🍒', '🍓', '🍐', '🍎', '🍊', '🍋', '🍋', '🥥', '🥝', '🍇', '🍒', '🍓', '🍐'];
    return ['🍎', '🍎', '🍊', '🍊', '🍋', '🍋', '🥥', '🥥', '🥝', '🥝', '🍇', '🍇'];
}

function randomFruits() {
    return getFruits().sort(() => Math.random() - 0.5);
}

export { getFruits, randomFruits };