import gameData from './game-data'
import {
    setLevelGame,
    startGame,
    makeFrontFaceCards,
    flipCard,
    shuffle,
    getTime,
    removeClassFlip,
    resetAllTimers,
} from '/src/function/gameFunctions.js'

import {
    startLevelBlockTemplate,
    startButtonTemplate,
    startShellTemplate,
    gameButtonTemplate,
    gameTimerTemplate,
} from '/src/function/templateItem.js'

import { templateEngine } from '/src/function/templating.js'

function renderStartShell(container) {
    container.appendChild(templateEngine(startShellTemplate()))
}

gameData.blocks['start-shell'] = renderStartShell

function renderStartLevelBlock(container) {
    container.appendChild(templateEngine(startLevelBlockTemplate()))

    const levelButtons = document.querySelectorAll('[data-level]')

    for (let button of levelButtons) {
        button.addEventListener('click', function () {
            setLevelGame(button)
        })
    }
}

gameData.blocks['start-level'] = renderStartLevelBlock

function renderStartButton(container, content) {
    container.appendChild(templateEngine(startButtonTemplate(content)))

    const start = document.querySelector('#start-button')
    start.addEventListener('click', function () {
        resetAllTimers()
        startGame()

        setTimeout(getTime, 5000)
    })
}

gameData.blocks['start-button'] = renderStartButton

function renderGameCardsFrontFace(container) {
    const memoryGame = document.createElement('section')
    memoryGame.classList.add('memory-game')
    memoryGame.setAttribute('id', 'memory-game')
    container.appendChild(memoryGame)

    makeFrontFaceCards(memoryGame)

    const cards = document.querySelectorAll('[data-rank]')
    shuffle(cards)

    cards.forEach(function (card) {
        setTimeout(removeClassFlip, 5000, card)
    })

    cards.forEach((card) => card.addEventListener('click', flipCard))
}

gameData.blocks['game-CardsFrontFace'] = renderGameCardsFrontFace

function renderGameButton(container) {
    container.appendChild(templateEngine(gameButtonTemplate()))

    const restart = document.querySelector('#restart')

    restart.addEventListener('click', function () {
        resetAllTimers()
        startGame()
        setTimeout(getTime, 5000)
    })
}

gameData.blocks['game-button'] = renderGameButton

function renderGameTimer(container) {
    container.appendChild(templateEngine(gameTimerTemplate()))
}

gameData.blocks['game-timer'] = renderGameTimer
