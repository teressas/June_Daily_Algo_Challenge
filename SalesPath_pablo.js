function Node(cost) {
    this.cost = cost
    this.children = [];
}

function getLowest(head) {
    let smollest = Infinity;
    if (head.children.length < 1) {
        return head.cost
    }
    for (let i = 0; i < head.children.length; i++) {
        let temp = getLowest(head.children[i]) + head.cost;
        if (smollest > temp) {
            smollest = temp
        }
    }
    return smollest
}

const head = new Node(0);

const layer1left = new Node(5);
layer1left.children = [new Node(4)]

const layer1right = new Node(6);
layer1right.children = [new Node(1), new Node(5)]

const layer1middle = new Node(3);

const layer1middleLEFT = new Node(2);
const layer1middleLEFTONE = new Node(1);
layer1middleLEFTONE.children = [new Node(1)];
layer1middleLEFT.children = [layer1middleLEFTONE];

const layer1middleRIGHT = new Node(0);
const layer1middleRIGHTONE = new Node(0);
layer1middleRIGHTONE.children = [new Node(10)]
layer1middleRIGHT.children = [layer1middleRIGHTONE]

layer1middle.children = [layer1middleLEFT, layer1middleRIGHT]

head.children = [layer1left, layer1middle, layer1right]
console.log(head)
console.log(getLowest(head));