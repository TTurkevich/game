export function startLevelBlockTemplate() {
    return {
        tag: 'div',
        cls: 'level',
        attrs: {
            id: 'level-box',
        },
        content: [
            {
                tag: 'button',
                cls: ['block', 'light'],
                attrs: {
                    'data-level': 'light',
                    'data-cards': '6',
                },
                content: '1',
            },
            {
                tag: 'button',
                cls: ['block', 'medium'],
                attrs: {
                    'data-level': 'medium',
                    'data-cards': '12',
                },
                content: '2',
            },
            {
                tag: 'button',
                cls: ['block', 'hard'],
                attrs: {
                    'data-level': 'hard',
                    'data-cards': '18',
                },
                content: '3',
            },
        ],
    }
}

export function startButtonTemplate() {
    return {
        tag: 'button',
        cls: ['button', 'start'],
        attrs: {
            id: 'start-button',
        },
        content: 'Старт',
    }
}

export function startShellTemplate() {
    return {
        tag: 'div',
        cls: 'container-start',
        attrs: {
            id: 'start-box',
        },
        content: [
            {
                tag: 'h1',
                cls: 'title',
                content: 'Выбери сложность',
            },
        ],
    }
}

export function gameCardsFrontFaceTemplate(data) {
    return {
        tag: 'div',
        cls: ['memory-card', 'flip'],
        attrs: {
            'data-rank': data.rank,
            'data-suits': data.suits,
        },
        content: [
            {
                tag: 'img',
                cls: 'front-face',
                attrs: {
                    src: data.newSrc,
                    alt: data.rank + ' ' + data.suits,
                },
            },
            {
                tag: 'img',
                cls: 'back-face',
                attrs: {
                    src: './css/img/back.png',
                    alt: 'memory card',
                },
            },
        ],
    }
}

export function gameButtonTemplate() {
    return {
        tag: 'button',
        cls: ['button', 'restart'],
        attrs: {
            id: 'restart',
        },
        content: 'Начать заново',
    }
}

export function gameTimerTemplate() {
    return {
        tag: 'div',
        cls: 'timer-game',
        content: [
            {
                tag: 'div',
                cls: 'timer-game-title',
                content: [
                    {
                        tag: 'div',
                        cls: ['timer-game-title-time'],
                        attrs: {
                            id: 'min',
                        },
                        content: 'min',
                    },
                    {
                        tag: 'div',
                        cls: ['timer-game-title-time'],
                        attrs: {
                            id: 'sec',
                        },
                        content: 'sec',
                    },
                ],
            },
            {
                tag: 'div',
                cls: 'timer-game-user-time',
                attrs: {
                    id: 'user-time',
                },
                content: '00.00',
            },
        ],
    }
}

export default {
    startLevelBlockTemplate,
    startButtonTemplate,
    startShellTemplate,
    gameCardsFrontFaceTemplate,
    gameButtonTemplate,
    gameTimerTemplate,
}
