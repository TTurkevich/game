import { renderBlock, renderScreen } from '../render'
import gameData from '../game-data'

const renderStartScreen: CreateScreenFunc = function (): void {
    const container = document.getElementById('container')

    if (container === null) return

    container.textContent = ''

    renderBlock('start-shell', container)

    const containerStart = document.getElementById('start-box') 

    if (containerStart === null) return

    renderBlock('start-level', containerStart)

    renderBlock('start-button', containerStart)
}

gameData.screens['start'] = renderStartScreen

renderScreen('start')
