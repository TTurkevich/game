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

function renderStartShell(container?: HTMLElement) {
    container?.appendChild(templateEngine(startShellTemplate()))
}

gameData.blocks['start-shell'] = renderStartShell

function renderStartLevelBlock(container?: HTMLElement) {
    container?.appendChild(templateEngine(startLevelBlockTemplate()))

    const levelButtons = document.querySelectorAll(
        '[data-level]'
    ) as NodeListOf<HTMLElement>

    levelButtons.forEach((levelButton) =>
        levelButton.addEventListener('click', () => setLevelGame(levelButton))
    )
}

gameData.blocks['start-level'] = renderStartLevelBlock

function renderStartButton(container?: HTMLElement) {
    container?.appendChild(templateEngine(startButtonTemplate()))

    const start = document.getElementById('start-button') as HTMLButtonElement
    start.addEventListener('click', function () {
        startGame()

        setTimeout(getTime, 5000)
    })
}

gameData.blocks['start-button'] = renderStartButton

function renderGameCardsFrontFace(container?: HTMLElement) {
    const memoryGame = document.createElement('section')
    memoryGame.classList.add('memory-game')
    memoryGame.setAttribute('id', 'memory-game')
    container?.appendChild(memoryGame)

    makeFrontFaceCards(memoryGame)

    const cards = document.querySelectorAll(
        '[data-rank]'
    ) as NodeListOf<Element>

    shuffle(cards)

    cards.forEach(function (card) {
        setTimeout(removeClassFlip, 5000, card)
    })

    cards.forEach((card) => card.addEventListener('click', flipCard))
}

gameData.blocks['game-CardsFrontFace'] = renderGameCardsFrontFace

function renderGameButton(container?: HTMLElement) {
    container?.appendChild(templateEngine(gameButtonTemplate()))

    const restart = document.getElementById('restart') as HTMLButtonElement

    restart.addEventListener('click', function () {
        startGame()
        setTimeout(getTime, 5000)
    })
}

gameData.blocks['game-button'] = renderGameButton

function renderGameTimer(container?: HTMLElement) {
    container?.appendChild(templateEngine(gameTimerTemplate()))
}

gameData.blocks['game-timer'] = renderGameTimer

function renderResultBlock(container?: HTMLElement, resultData?: any) {
    container?.appendChild(templateEngine(resultTemplate(resultData)))
}

gameData.blocks['result-block'] = renderResultBlock

function renderResultButton(container?: HTMLElement) {
    container?.appendChild(templateEngine(resetButtonTemplate()))

    const reset = document.getElementById('reset') as HTMLButtonElement

    reset.addEventListener('click', function () {
        resetAllTimers()
        renderScreen('start')
    })
}

gameData.blocks['result-button'] = renderResultButton
