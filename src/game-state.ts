declare const window: any

const suits = ['diamonds', 'hearts', 'spades', 'clubs']
const rank = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace']

const levelBox: LevelBox[] = [
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
]

const result: GameResult[] = [
    {
        status: 'win',
        text: 'Вы выиграли!',
        src: './static/img/win.png',
    },
    {
        status: 'lose',
        text: 'Вы проиграли!',
        src: './static/img/lose.png',
    },
    { time: null },
]

const blocks: Blocks = {}

const screens: Screens = {}

const gameData: GameData = {
    suits: suits,
    rank: rank,
    hasFlippedCard: false,
    lockBoard: false,
    firstCard: null,
    secondCard: null,
    levelBox: levelBox,
    result: result,
    level: null,
    timers: [],
    blocks: blocks,
    screens: screens,
    renderScreen: function () {},
    renderBlock: function () {},
}

window.gameData = gameData

export default gameData
