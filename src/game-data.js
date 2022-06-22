const gameData = (window.application = {
    suits: ['diamonds', 'hearts', 'spades', 'clubs'],
    rank: ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'],
    hasFlippedCard: false,
    lockBoard: false,
    firstCard: null,
    secondCard: null,
    levelBox: [
        {
            level: 'light',
            cards: 6,
        },
        {
            level: 'medium',
            cards: 12,
        },
        {
            level: 'hard',
            cards: 18,
        },
    ],
    result: [
        {
            status: 'win',
            text: 'Вы выиграли!',
            src: './css/img/win.png',
        },
        {
            status: 'lose',
            text: 'Вы проиграли!',
            src: './css/img/lose.png',
        },
        { time: null },
    ],
    level: {},
    blocks: {},
    screens: {},
    renderScreen: function () {},
    renderBlock: function () {},
    timers: [],
})

export default gameData
