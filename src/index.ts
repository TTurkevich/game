import './game-state'
import './helpers/templating'
import './helpers/templateItem'
import './helpers/gameFunctions'
import './render'
import './blocks'
import './screen/start'
import './screen/game'
import './css/style.css'
declare const gameData: any

import { renderBlock, renderScreen } from './render'

renderScreen('start')