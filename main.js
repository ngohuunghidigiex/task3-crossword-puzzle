const words = [
    'phamthithanhngan', // T
    'nghingo', // I
    'khoatran', // T
    'khoitran', // A
    'nhungnguyen', // N
    'vothihoa', // I
    'nguyenductrong', // C
];

const liWords = document.getElementById('words');
words.forEach((word) => {
    const li = document.createElement('li');
    li.innerHTML = word;
    liWords.appendChild(li);
});

const keyWord = ['t', 'i', 't', 'a', 'n', 'i', 'c'];

function findKeyWordPositions(words, keyWord) {
    const positions = [];
    keyWord.forEach((char) => {
        for (let i = 0; i < words.length; i++) {
            const index = words[i].indexOf(char);
            if (index !== -1) {
                positions.push({ word: words[i], position: index, char });
                words.splice(i, 1);
                break;
            }
        }
    });
    return positions;
}

function renderGame(position) {
    let game = document.createElement('div');
    game.classList.add('game');
    var positionOfKey;

    for (let index of position) {
        let cells = document.createElement('div');
        cells.classList.add('row');

        for (let i = 0; i < index.word.length; i++) {
            let cell = document.createElement('span');
            cell.innerHTML = index.word[i];
            positionOfKey = index.position;
            if (i === index.position) {
                cell.style.color = 'red';
                cell.style.backgroundColor = 'yellow';
            } else {
                cell.style.backgroundColor = '#f0f0f0';
            }

            cells.style.transform = `translateX(-${positionOfKey * 50}px)`;
            cells.appendChild(cell);
        }
        game.appendChild(cells);
        game.style.transform = `translateX(40%)`;
    }
    return game;
}

let grid = document.getElementById('crossword-grid');
const positions = findKeyWordPositions(words, keyWord);
const game = renderGame(positions);

console.log(positions);

grid.appendChild(game);
