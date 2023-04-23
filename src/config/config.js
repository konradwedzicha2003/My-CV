export const land = [
    1,2,3,4,5,6,7,8,9,10,
    20,21,22,23,24,25,26,27,28,
    30,31,32,33,34,35,36,37,38,
    40,41,42,43,44,45,46,47,48,
    50,51,60,61,63,64,65,66,67,68,69,
    70,71,73,74,75,76,77,78,79,
    80,81,91,92,93,94,95,96,97,98,99,100
]

export const pathStart = {
    start: 0
}

export const path = [
    11,12,13,14,15,16,17,18,19,
    29,39,49,59,58,57,56,55,54,
    53,52,62,72,82,83,84,85,86,
    87,88,89,90
]

export const basicEnemy = {
    health: 2,
    position: 11,
    direction: 'right',
    initialRender: true
}

export const initialReduxValues = {
    grid: {
        gridCells: [],
    },
    enemies: [],
    towerPick: {
        isBuildTowerViewOpened: false,
        pickedTower: '',
    }
}

export const towerTypes = {
    basicTower: 'basic-tower',
}
