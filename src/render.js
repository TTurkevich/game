import gameData from './game-data'
import { resetAllTimers } from './function/gameFunctions'

export function renderBlock(block, container, src, alt, data) {
    if (!gameData.blocks[block]) {
        console.log('no block')
    } else {
        gameData.renderBlock[block] = gameData.blocks[block]
        gameData.renderBlock[block](container, src, alt, data)
    }
}

export function renderScreen(screen, data) {
    resetAllTimers()

    if (!gameData.screens[screen]) {
        console.log('no block')
    } else {
        gameData.renderScreen[screen] = gameData.screens[screen]
        gameData.renderScreen[screen](data)
    }
}

export default {
    renderBlock,
    renderScreen,
}
