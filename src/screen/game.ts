import { renderBlock } from '../render'
import gameData from '../game-data'
import { checkResult } from '../function/gameFunctions'

function renderGameFontFaceScreen() {
    const container = document.getElementById('container') as HTMLElement
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

function renderResultScreen(resultData: any) {
    const container = document.getElementById('container') as HTMLElement

    renderBlock('result-block', container, resultData)

    const resultContainer = document.getElementById(
        'result-item'
    ) as HTMLElement

    renderBlock('result-button', resultContainer)
}

gameData.screens['result-window'] = renderResultScreen
