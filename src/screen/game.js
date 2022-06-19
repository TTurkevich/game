import { renderBlock } from '../render.js'
import gameData from '../game-data'

function renderGameFontFaceScreen() {
    const container = document.querySelector('#container')
    container.textContent = ''

    const gameAttributes = document.createElement('section')
    gameAttributes.classList.add('game-attributes')
    container.appendChild(gameAttributes)

    renderBlock('game-timer', gameAttributes)
    renderBlock('game-button', gameAttributes)

    renderBlock('game-CardsFrontFace', container)
}

gameData.screens['game-fontFace'] = renderGameFontFaceScreen
