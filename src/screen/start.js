import { renderBlock, renderScreen } from '../render'
import gameData from '../game-data'

function renderStartScreen() {
    const container = document.querySelector('#container')
    container.textContent = ''

    renderBlock('start-shell', container)

    const containerStart = document.querySelector('#start-box')

    renderBlock('start-level', containerStart)

    renderBlock('start-button', containerStart)
}

gameData.screens['start'] = renderStartScreen

renderScreen('start')
