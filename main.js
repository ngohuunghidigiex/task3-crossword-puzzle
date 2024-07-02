var words = [
    'phamthithanhngan', // T
    'nghingo', // I
    'khoatran', // T
    'khoitran', // A
    'nhungnguyen', // N
    'vothihoa', // I
    'nguyenductrong', // C
];

const liWords = document.getElementById('words');
const addWord = document.getElementById('add-word');
let grid = document.getElementById('crossword-grid');
const getKeyword = document.getElementById('get-keyword');
const generate = document.getElementById('generate-crossword');
var keyWord = [];

words.forEach((word) => {
    const li = document.createElement('li');
    li.innerHTML = word;
    liWords.appendChild(li);
});

addWord.addEventListener('click', () => {
    const word = document.getElementById('word').value;
    const li = document.createElement('li');
    li.innerHTML = word;
    liWords.appendChild(li);
    words.push(word);
});

generate.addEventListener('click', () => {
    keyWord = getKeyword.value.split('');
    const positions = findKeyWordPositions(words, keyWord);
    console.log(positions);
    console.log(keyWord);
    const game = renderGame(positions);

    grid.innerHTML = '';
    grid.appendChild(game);
});

function findKeyWordPositions(words, keyWord) {
    const positions = [];
    const tempWord = [...words];
    keyWord.forEach((char) => {
        for (let i = 0; i < tempWord.length; i++) {
            const index = tempWord[i].indexOf(char);
            if (index !== -1) {
                positions.push({ word: tempWord[i], position: index, char });
                tempWord.splice(i, 1);
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
