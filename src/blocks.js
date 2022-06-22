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
} from './function/gameFunctions'

import {
    startLevelBlockTemplate,
    startButtonTemplate,
    startShellTemplate,
    gameButtonTemplate,
    gameTimerTemplate,
    resultTemplate,
    resetButtonTemplate,
} from './function/templateItem'

import { templateEngine } from './function/templating'
import { renderScreen } from './render'

function renderStartShell(container) {
    container.appendChild(templateEngine(startShellTemplate()))
}

gameData.blocks['start-shell'] = renderStartShell

function renderStartLevelBlock(container) {
    container.appendChild(templateEngine(startLevelBlockTemplate()))

    const levelButtons = document.querySelectorAll('[data-level]')

    levelButtons.forEach((levelButton) =>
        levelButton.addEventListener('click', () => setLevelGame(levelButton))
    )
}

gameData.blocks['start-level'] = renderStartLevelBlock

function renderStartButton(container) {
    container.appendChild(templateEngine(startButtonTemplate()))

    const start = document.querySelector('#start-button')
    start.addEventListener('click', function () {
       
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
        
        startGame()
        setTimeout(getTime, 5000)
    })
}

gameData.blocks['game-button'] = renderGameButton

function renderGameTimer(container) {
    container.appendChild(templateEngine(gameTimerTemplate()))
}

gameData.blocks['game-timer'] = renderGameTimer

function renderResultBlock(container, resultData) {
    container.appendChild(templateEngine(resultTemplate(resultData)))
}

gameData.blocks['result-block'] = renderResultBlock

function renderResultButton(container) {
    container.appendChild(templateEngine(resetButtonTemplate()))

    const reset = document.querySelector('#reset')

    reset.addEventListener('click', function () {
        resetAllTimers()
        renderScreen('start')
    })
}

gameData.blocks['result-button'] = renderResultButton
