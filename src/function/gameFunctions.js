import gameData from '../game-data.js'
import { gameCardsFrontFaceTemplate } from '/src/function/templateItem.js'
import { renderScreen } from '../render.js'
import { templateEngine } from '/src/function/templating.js'

export function setLevelGame(element) {
    const levelBox = gameData.levelBox

    for (let i = 0; i < levelBox.length; i++) {
        if (element.dataset.level === levelBox[i].level) {
            gameData.level = levelBox[i]
            console.log(gameData.level)
        }
    }
}

export function resetAllTimers() {
    for (let item of gameData.timers) {
        clearInterval(item)
    }
}

export function startGame() {
    renderScreen('game-fontFace')
}

function findFrontFaceCard(arr) {
    let newSrc

    for (let i = 0; i < gameData.suits.length; i++) {
        for (let j = 0; j < gameData.rank.length; j++) {
            newSrc =
                './css/img/cards/' +
                gameData.rank[j] +
                '-' +
                gameData.suits[i] +
                '.png'
            arr.push({
                suits: gameData.suits[i],
                rank: gameData.rank[j],
                newSrc: newSrc,
            })
        }
    }

    return arr
}

export function makeFrontFaceCards(container) {
    const data = []
    findFrontFaceCard(data)

    const shuffleData = data
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)

    const newData = shuffleData.slice(0, window.application.level.cards / 2)

    const deck = newData.concat(newData)

    container.appendChild(templateEngine(deck.map(gameCardsFrontFaceTemplate)))
}

export function shuffle(cards) {
    const deckOfCards = gameData.level.cards
    cards.forEach((card) => {
        let randomPos = Math.floor(Math.random() * deckOfCards)
        card.style.order = randomPos
    })
}

export function flipCard() {
    if (gameData.lockBoard) return
    if (this === gameData.firstCard) return

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
    let isMatch =
        gameData.firstCard.dataset.suits ===
            gameData.secondCard.dataset.suits &&
        gameData.firstCard.dataset.rank === gameData.secondCard.dataset.rank
    isMatch ? disableCards() : unflipCards()
}

function disableCards() {
    gameData.firstCard.removeEventListener('click', flipCard)
    gameData.secondCard.removeEventListener('click', flipCard)

    alert('Вы выиграли!')
    resetBoard()
}

function unflipCards() {
    setTimeout(() => {
        gameData.firstCard.classList.remove('flip')
        gameData.secondCard.classList.remove('flip')
        resetBoard()
    }, 1500)

    alert('Вы проиграли!')
}

function resetBoard() {
    gameData.hasFlippedCard = false
    gameData.lockBoard = false
    gameData.firstCard = undefined
    gameData.secondCard = undefined
}

export function removeClassFlip(item) {
    item.classList.remove('flip')
}

export function getTime() {
    const startDate = new Date()

    gameData.timers.push(setInterval(() => tick(startDate), 1000 / 60))
}

function tick(date) {
    const oneSecond = 1000
    const oneMinute = oneSecond * 60
    const oneHour = oneMinute * 60

    const now = new Date()
    const elapsed = now - date
    const parts = []

    parts[0] = '' + Math.floor((elapsed % oneHour) / oneMinute)

    parts[1] = '' + Math.floor(((elapsed % oneHour) % oneMinute) / oneSecond)

    parts[0] = parts[0].length === 1 ? '0' + parts[0] : parts[0]
    parts[1] = parts[1].length === 1 ? '0' + parts[1] : parts[1]

    const timer = document.querySelector('#user-time')

    timer.textContent = parts.join('.')
}

export default {
    setLevelGame,
    resetAllTimers,
}
