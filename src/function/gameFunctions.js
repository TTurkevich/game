import gameData from '../game-data.js'

export function setLevelGame(element) {
    const levelBox = gameData.levelBox

    for (let i = 0; i < levelBox.length; i++) {
        if (element.dataset.level === levelBox[i].level) {
            gameData.level = levelBox[i]
            console.log(gameData.level)
        }
    }
}

export function resetAllTimers() {
    for (let item of gameData.timers) {
        clearInterval(item)
    }
}

export default {
    setLevelGame,
    resetAllTimers,
}
