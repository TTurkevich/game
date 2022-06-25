declare const window: any

interface Window {
    suits: string[]
    rank: string[]
    hasFlippedCard: boolean
    lockBoard: boolean
    firstCard: null | HTMLElement
    secondCard: null | HTMLElement
    levelBox: LevelBox[]
    result: Result[]
    level: null | number
    timers: NodeJS.Timer[]
    blocks: Blocks
    screens: Screens
    renderScreen: any
    renderBlock: any
}

const suits = ['diamonds', 'hearts', 'spades', 'clubs']
const rank = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace']

interface LevelBox {
    level: string
    cards: number
}

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

interface Result {
    status?: string
    text?: string
    src?: string
    time?: string | null
}

const result: Result[] = [
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

type Data = [
    {
        [key: string | number]: string | number | null
    }
]

type Func = (container: HTMLElement, data?: Data) => void

interface Blocks {
    [key: string]: Func
}
const blocks: Blocks = {}

interface Screens {
    [key: string]: Func
}

const screens: Screens = {}

const gameData: Window = {
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
