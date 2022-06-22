declare const window: any

interface IWindow {
    suits: string[]
    rank: string[]
    hasFlippedCard: boolean
    lockBoard: boolean
    firstCard: null | HTMLElement
    secondCard: null | HTMLElement
    levelBox: ILevelBox[]
    result: IResult[]
    level: null | number
    timers: NodeJS.Timer[]
    blocks: any
    screens: any
    renderScreen: any
    renderBlock: any
}

const suits = ['diamonds', 'hearts', 'spades', 'clubs']
const rank = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace']

interface ILevelBox {
    level: string
    cards: number
}

const levelBox: ILevelBox[] = [
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

interface IResult {
    status?: string
    text?: string
    src?: string
    time?: string | null
}

const result: IResult[] = [
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
]

const gameData: IWindow = {
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
    blocks: {},
    screens: {},
    renderScreen: function () {},
    renderBlock: function () {},
}

window.gameData = gameData

export default gameData
