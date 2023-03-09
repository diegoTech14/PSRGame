let marks = {
    lp_one: document.getElementById('lp-one'),
    lp_two: document.getElementById('lp-two'),
    lp_three: document.getElementById('lp-three'),
    rp_one: document.getElementById('rp-one'),
    rp_two: document.getElementById('rp-two'),
    rp_three: document.getElementById('rp-three')
}

let hands = {
    paperHand:document.getElementById('paper'),
    scissorsHand:document.getElementById('scissors'),
    stoneHand:document.getElementById('stone')
}

var counters = {
    counterPlayer: -1,
    counterPC: -1,
    numberLeft : -1
}

let imageSides = {
    rightImage : document.getElementById('right-image-field'),
    leftImage : document.getElementById('left-image-field')
}

export {counters, hands, marks, imageSides}