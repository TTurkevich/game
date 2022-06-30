import { renderBlock } from '../render'
import gameData from '../game-state'
import { checkResult } from '../helpers/gameFunctions'

const renderGameFontFaceScreen: CreateScreenFunc = function (): void {
    const container = document.getElementById('container')

    if (container === null) return

    container.textContent = ''

    const gameAttributes = document.createElement('section')
    gameAttributes.classList.add('game-attributes')
    container.appendChild(gameAttributes)

    renderBlock('game-timer', gameAttributes)
    renderBlock('game-button', gameAttributes)

    renderBlock('game-CardsFrontFace', container)

    setTimeout(() => {
        gameData.timers.push(setInterval(() => checkResult(), 500))
    }, 6000)
}

gameData.screens['game-fontFace'] = renderGameFontFaceScreen

const renderResultScreen: CreateScreenFunc = function (
    resultData?: Data
): void {
    const container = document.getElementById('container')

    if (container === null) return

    renderBlock('result-block', container, resultData)

    const resultContainer = document.getElementById('result-item')

    if (resultContainer === null) return
    renderBlock('result-button', resultContainer)
}

gameData.screens['result-window'] = renderResultScreen
