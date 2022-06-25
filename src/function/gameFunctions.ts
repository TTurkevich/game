import gameData from '../game-data'
import { gameCardsFrontFaceTemplate } from './templateItem'
import { renderScreen } from '../render'
import { templateEngine } from './templating'

export function setLevelGame(element: HTMLElement) {
    const levelBox = gameData.levelBox

    for (let item of levelBox) {
        if (element.dataset.level === item.level) {
            gameData.level = item.cards
        }
    }
}

export function resetAllTimers() {
    if (gameData.timers !== null) {
        for (let item of gameData.timers) {
            clearInterval(item)
        }
    }
}

export function startGame() {
    renderScreen('game-fontFace')
}

function findFrontFaceCard() {
    let newSrc: string

    interface DataEntry {
        suits: string
        rank: string
        newSrc: string
    }

    const dataEntry: DataEntry[] = []

    for (let i = 0; i < gameData.suits.length; i++) {
        for (let j = 0; j < gameData.rank.length; j++) {
            newSrc =
                './css/img/cards/' +
                gameData.rank[j] +
                '-' +
                gameData.suits[i] +
                '.png'
            dataEntry.push({
                suits: gameData.suits[i],
                rank: gameData.rank[j],
                newSrc: newSrc,
            })
        }
    }

    return dataEntry
}

export function makeFrontFaceCards(container: HTMLElement) {
    const data = findFrontFaceCard()

    const shuffleData = data
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)

    if (gameData.level !== null) {
        const newData = shuffleData.slice(0, gameData.level / 2)

        const deck = newData.concat(newData)

        container.appendChild(
            templateEngine(deck.map(gameCardsFrontFaceTemplate))
        )
    }
}

export function shuffle(cards: NodeList) {
    if (gameData.level !== null) {
        const deckOfCards = gameData.level
        cards.forEach((card: any) => {
            let randomPos: number = Math.floor(Math.random() * deckOfCards)
            card.style.order = randomPos
        })
    }
}

export function flipCard(this: HTMLElement) {
    if (gameData.lockBoard) return
    if (this === gameData.firstCard) return
    if (this.classList.contains('flip')) {
        alert('на перевернутых картах все могут...')
        return
    }

    this.classList.add('flip')

    if (!gameData.hasFlippedCard) {
        gameData.hasFlippedCard = true
        gameData.firstCard = this
        return
    }
    gameData.secondCard = this
    gameData.lockBoard = true

    checkForMatch()
}

function checkForMatch() {
    let isMatch: boolean =
        gameData.firstCard?.dataset.suits ===
            gameData.secondCard?.dataset.suits &&
        gameData.firstCard?.dataset.rank === gameData.secondCard?.dataset.rank
    isMatch ? disableCards() : unflipCards()
}

function disableCards() {
    gameData.firstCard?.removeEventListener('click', flipCard)
    gameData.secondCard?.removeEventListener('click', flipCard)

    resetBoard()
}

function unflipCards() {
    resetBoard()
    setLose()
}

function resetBoard() {
    gameData.hasFlippedCard = false
    gameData.lockBoard = false
    gameData.firstCard = null
    gameData.secondCard = null
}

export function removeClassFlip(item: HTMLElement) {
    item.classList.remove('flip')
}

export function getTime() {
    const startDate: Date = new Date()

    if (gameData.timers !== null) {
        gameData.timers.push(setInterval(() => tick(startDate), 1000 / 60))
    }
}

function tick(date: Date) {
    const oneSecond: number = 1000
    const oneMinute: number = oneSecond * 60
    const oneHour: number = oneMinute * 60

    const now: Date = new Date()
    const elapsed = now.valueOf() - date.valueOf()
    const parts: string[] = []

    parts[0] = '' + Math.floor((elapsed % oneHour) / oneMinute)

    parts[1] = '' + Math.floor(((elapsed % oneHour) % oneMinute) / oneSecond)

    parts[0] = parts[0].length === 1 ? '0' + parts[0] : parts[0]
    parts[1] = parts[1].length === 1 ? '0' + parts[1] : parts[1]

    const timer = document.getElementById('user-time') as HTMLElement

    timer.textContent = parts.join('.')
}

function getTimeGame() {
    const timer = document.getElementById('user-time') as HTMLElement

    gameData.result[2].time = timer.textContent
}

export function checkResult() {
    const deckOfCards = gameData.level
    const flipCards = document.querySelectorAll('.flip')

    if (flipCards.length === deckOfCards) {
        getTimeGame()
        resetAllTimers()

        const resultData = gameData.result[0]

        renderScreen('result-window', resultData)
    }
}

function setLose() {
    getTimeGame()
    resetAllTimers()

    const resultData = gameData.result[1]

    renderScreen('result-window', resultData)
}

export default {
    setLevelGame,
    resetAllTimers,
    startGame,
    makeFrontFaceCards,
    shuffle,
    flipCard,
    getTime,
    removeClassFlip,
    getTimeGame,
    checkResult,
}
