import gameData from './game-data'
import { resetAllTimers } from './function/gameFunctions'

export function renderBlock(
    block: string,
    container?: HTMLElement,
    data?: any
) {
    if (!gameData.blocks[block]) {
        console.log('no block')
    } else {
        gameData.renderBlock[block] = gameData.blocks[block]
        gameData.renderBlock[block](container, data)
    }
}

export function renderScreen(screen: string, data?: any) {
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
