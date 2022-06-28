declare module '*.jpg'
declare module '*.jpeg'

interface DataEntry {
    suits: string
    rank: string
    newSrc: string
}

interface GameData {
    suits: string[]
    rank: string[]
    hasFlippedCard: boolean
    lockBoard: boolean
    firstCard: null | HTMLElement
    secondCard: null | HTMLElement
    levelBox: LevelBox[]
    result: GameResult[]
    level: null | number
    timers: NodeJS.Timer[]
    blocks: Blocks
    screens: Screens
    renderScreen: any
    renderBlock: any
}

interface LevelBox {
    level: string
    cards: number
}

interface GameResult {
    status?: string
    text?: string
    src?: string
    time?: string | null
}

type Data = [
    {
        [key: string]: string | number | null
    }
]

type CreateBlockFunc = (container: HTMLElement, data?: Data) => void

interface Blocks {
    [key: string]: CreateBlockFunc
}

type CreateScreenFunc = (data?: Data) => void
interface Screens {
    [key: string]: CreateScreenFunc
}
