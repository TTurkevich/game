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

const renderStartShell: CreateBlockFunc = function (
    container: HTMLElement
): void {
    container.appendChild(templateEngine(startShellTemplate()))
}

gameData.blocks['start-shell'] = renderStartShell

const renderStartLevelBlock: CreateBlockFunc = function (
    container: HTMLElement
): void {
    container.appendChild(templateEngine(startLevelBlockTemplate()))

    const levelButtons: NodeListOf<HTMLElement> =
        document.querySelectorAll('[data-level]')

    levelButtons.forEach((levelButton) =>
        levelButton.addEventListener('click', () => setLevelGame(levelButton))
    )
}

gameData.blocks['start-level'] = renderStartLevelBlock

const renderStartButton: CreateBlockFunc = function (
    container: HTMLElement
): void {
    container.appendChild(templateEngine(startButtonTemplate()))

    const start = document.getElementById('start-button')
    start?.addEventListener('click', function () {
        startGame()

        setTimeout(getTime, 5000)
    })
}

gameData.blocks['start-button'] = renderStartButton

const renderGameCardsFrontFace: CreateBlockFunc =
    function renderGameCardsFrontFace(container: HTMLElement): void {
        const memoryGame = document.createElement('section')
        memoryGame.classList.add('memory-game')
        memoryGame.setAttribute('id', 'memory-game')
        container.appendChild(memoryGame)

        makeFrontFaceCards(memoryGame)

        const cards: NodeListOf<HTMLElement> =
            document.querySelectorAll('[data-rank]')

        shuffle(cards)

        cards.forEach(function (card) {
            setTimeout(removeClassFlip, 5000, card)
        })

        cards.forEach((card) =>
            card.addEventListener('click', () => flipCard(card))
        )
    }

gameData.blocks['game-CardsFrontFace'] = renderGameCardsFrontFace

const renderGameButton: CreateBlockFunc = function (
    container: HTMLElement
): void {
    container.appendChild(templateEngine(gameButtonTemplate()))

    const restart = document.getElementById('restart')

    restart?.addEventListener('click', function () {
        startGame()
        setTimeout(getTime, 5000)
    })
}

gameData.blocks['game-button'] = renderGameButton

const renderGameTimer: CreateBlockFunc = function (
    container: HTMLElement
): void {
    container.appendChild(templateEngine(gameTimerTemplate()))
}

gameData.blocks['game-timer'] = renderGameTimer

const renderResultBlock: CreateBlockFunc = function (
    container: HTMLElement,
    resultData?: Data
): void {
    container.appendChild(templateEngine(resultTemplate(resultData)))
}

gameData.blocks['result-block'] = renderResultBlock

const renderResultButton: CreateBlockFunc = function (
    container: HTMLElement
): void {
    container.appendChild(templateEngine(resetButtonTemplate()))

    const reset = document.getElementById('reset')

    reset?.addEventListener('click', function () {
        resetAllTimers()
        renderScreen('start')
    })
}

gameData.blocks['result-button'] = renderResultButton
