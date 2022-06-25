import { renderBlock, renderScreen } from '../render'
import gameData from '../game-data'

function renderStartScreen() {
    const container = document.getElementById('container') as HTMLElement
    container.textContent = ''

    renderBlock('start-shell', container)

    const containerStart = document.getElementById('start-box') as HTMLElement

    renderBlock('start-level', containerStart)

    renderBlock('start-button', containerStart)
}

gameData.screens['start'] = renderStartScreen

renderScreen('start')
