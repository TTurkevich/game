import gameData from './game-data'
import { resetAllTimers } from './function/gameFunctions'

export function renderBlock(block: any, container: Element, src?: string, alt?: string, data?: any) {
    if (!gameData.blocks[block]) {
        console.log('no block')
    } else {
        gameData.renderBlock[block] = gameData.blocks[block]
        gameData.renderBlock[block](container, src, alt, data)
    }
}

export function renderScreen(screen: any, data?: any) {
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
