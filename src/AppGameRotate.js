import { useState, useEffect, useRef, useCallback } from "react";
import getLetterCountMap from "./utils/utils.js";
import "./AppGameSlide.css";
import "./AppGameRotate.css";
// import "./AppModal.css";
import wordsSolve2 from './components/WordsSolve2';
// import WordModal from './WordModal';


const solveWordsArr = wordsSolve2;
//const solveWordsArr = ['0DRINK', '0WATER', '0APPLE'];
let pickNumber = Math.floor(Math.random() * solveWordsArr.length);
const wordPick = solveWordsArr[pickNumber]


const arr = [
    { id: 0, letter: '0', state: "tileStart" },
    { id: 1, letter: randomLetrs(1), state: "tileBorderRed" },
    { id: 2, letter: randomLetrs(1), state: "tileStart" }, { id: 3, letter: randomLetrs(1), state: "tileStart" },
    { id: 4, letter: letterCenter(1), state: "tileBlue" }, { id: 5, letter: randomLetrs(1), state: "tileStart" },
    { id: 6, letter: randomLetrs(1), state: "tileStart" }, { id: 7, letter: randomLetrs(1), state: "tileStart" },
    { id: 8, letter: randomLetrs(1), state: "tileStart" },
];

const arr2 = [
    { id: 0, letter: '0', state: "tileStart" },
    { id: 1, letter: randomLetrs(1), state: "tileBorderRed" },
    { id: 2, letter: randomLetrs(1), state: "tileStart" }, { id: 3, letter: randomLetrs(1), state: "tileStart" },
    { id: 4, letter: letterCenter(1), state: "tileBlue" }, { id: 5, letter: randomLetrs(1), state: "tileStart" },
    { id: 6, letter: randomLetrs(1), state: "tileStart" }, { id: 7, letter: randomLetrs(1), state: "tileStart" },
    { id: 8, letter: randomLetrs(1), state: "tileStart" },
];

const SIZE = 3;

const answerKeyArrPlayer = [
    { id: 1, letter: "A", state: "tileStart" }, { id: 2, letter: 5, state: "tileStart" },
    { id: 3, letter: addTiles2(arr), state: "tileStart" },
]


function addTiles1(array) {
    let sum1 = 0
    let sum2 = 0
    let sum3 = 0
    const arrVert = []
    for (let i = array.length - 1; i > 0; i--) {

        // if (i === 0 && 1 && 2) {
        //     sum1 = arr[i].letter + arr[i+1].letter + arr[i + 2].letter
        //     console.log("NumAdded1:", sum1)
        // }
        if (i === 3 && 4 && 5) {
            sum2 = arr[i].letter + arr[i + 1].letter + arr[i + 2].letter
        }
        if (i === 6 && 7 && 8) {
            sum3 = arr[i].letter + arr[i + 1].letter + arr[i + 2].letter
        }

    }
    arrVert.push(sum2, sum3)
    console.log("ARRVERT:", arrVert)
    return sum2
}

function addTiles2(array) {
    let sum3 = 0
    const arrVert = []
    for (let i = array.length - 1; i > 0; i--) {

        if (i === 6 && 7 && 8) {
            sum3 = arr[i].letter + arr[i + 1].letter + arr[i + 2].letter
        }
    }
    arrVert.push(sum3)
    return sum3
}

function randomLetrs(length) {
    var result = 0;
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        //result += characters.charAt(Math.floor(Math.random() * charactersLength));
        result += Math.floor(Math.random() * charactersLength)

    }
    return result;
}
/////////////////////////////////////////////////////////////////////////////
function letterCenter(length) {
    var result = "";
    // var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    // var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        //result += characters.charAt(Math.floor(Math.random() * charactersLength));
        result += "X"

    }
    return result;
}
//////////////////////////////////////////////////////////////////////////

// function shuffle(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//         let j = Math.floor(Math.random() * (8 - 1) + 1);
//         let temp = array[i];
//         array[i] = array[j];
//         array[j] = temp;
//     }
// }
// shuffle(arr);

function getPos(index) {
    return {
        row: Math.floor(index / SIZE),
        col: Math.floor(index % SIZE)
    };
};

function canSwap(targetIndex, blankIndex) {
    const { row: targetRow, col: targetCol } = getPos(targetIndex);
    const { row: blankRow, col: blankCol } = getPos(blankIndex);
    return Math.abs(targetRow - blankRow) + Math.abs(targetCol - blankCol) === 1;
};

function swap(cards, targetIndex, blankIndex) {
    const arr = [...cards];
    arr[targetIndex] = cards[blankIndex];
    arr[blankIndex] = cards[targetIndex];
    return arr;
};



function App() {

    const [blankIndex, setBlankIndex] = useState(arr[0].id);
    const [cards, setCards] = useState(arr);
    const [cards2, setCards2] = useState(arr2);
    const [moves, setMoves] = useState(0);

    const [color, setColor] = useState('tileStart');
    let isShown = false;

    const [arrPlayer, setArrPlayer] = useState(answerKeyArrPlayer);

    //////////////////////////////////////////////////
    const changeColor2 = (targetIndex) => {
        console.log(cards[targetIndex].state)

        for (let i = 0; i < cards.length; i++) {
            setColor(cards[i].state = 'tileGreen')
        }
    };
    /////////////////////////////////////////////////


    function handleCardClick(targetIndex) {
        // if (canSwap(targetIndex, blankIndex)) {
        //     startTimer();
        //     setMoves(moves + 1)
        //     setCards((cards) => swap(cards, targetIndex, blankIndex));
        //     setBlankIndex(targetIndex);
        // }
    };

    function handleCardClickA(targetIndex) {
        if (targetIndex === 4) {
            setCards((cards) => swap(cards, 1, 5));
            setCards((cards) => swap(cards, 1, 7));
            setCards((cards) => swap(cards, 1, 3));
            //console.log(getPos(1))
        }
        arrPlayer[0].letter = cards[3].letter
        //cards[4].letter = cards[3].letter
    };


    function handleCardClickB(targetIndex) {
        // changeColorBorder(targetIndex)
        if (targetIndex === 4) {
            setCards2((cards2) => swap(cards2, 1, 5));
            setCards2((cards2) => swap(cards2, 1, 7));
            setCards2((cards2) => swap(cards2, 1, 3));
        }
        arrPlayer[1].letter = cards2[3].letter
    };


    const solutionCountMap = getLetterCountMap(wordPick);
    function checkWin() {
        let currentWordArr = []
        // board 3 by 3 //////////////////////////
        // for (let i = 3; i < cards.length; i++) {
        //     cards[i].state = 'tileStart'
        // }

        for (let i = 0; i < wordPick.length; i++) {

            const solChar = wordPick[i];
            const solCountVal = solutionCountMap[cards[i].letter];
            if (cards[i].letter === solChar) {
                solutionCountMap[solChar] = solutionCountMap[solChar] - 1;
                //cards[i].state = 'tileGreen'
                arrPlayer[0].letter = cards[1].letter + cards[2].letter
                //arrPlayer[0].letter = cards[i].letter
                arrPlayer[1].letter = cards[3].letter + cards[4].letter + cards[5].letter

                currentWordArr.push(cards[i].letter)

                let aa = currentWordArr.join()
                let currentWordString = aa.replaceAll(',', '');
                if (currentWordString === wordPick) {
                    // gameOverWon();
                    arrPlayer[0].letter = cards[1].letter + cards[2].letter
                }
            }
            else if (solCountVal && solCountVal > 0) {
                cards[i].state = 'tileYellow'
                arrPlayer[1].letter = cards[1].letter + cards[2].letter
            }
            else {
                cards[i].state = 'tileStart'
                arrPlayer[0].letter = cards[1].letter + cards[2].letter
                arrPlayer[1].letter = cards[3].letter + cards[4].letter + cards[5].letter
                arrPlayer[2].letter = cards[6].letter + cards[7].letter + cards[8].letter
            }
        }
    }

    // MODAL WON GAME ////////////////////////////////////////////////////////
    function gameOverWon() {
        var modalWin = document.getElementById("myModalWin");
        // If modalWin exists run code.
        if (modalWin !== null) {
            setTimeout(function () {
                stopTimer();
            }, 10)
            setTimeout(function () {
                modalWin.style.display = "block";
            }, 500)
        }
    }

    // TIMER ////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////
    let [running, setRunning] = useState(false);
    let [time, setTime] = useState(0);
    let timerId = useRef(null);

    function convert(ms) {
        let milliseconds = Math.floor((ms % 1000) / 10);
        let seconds = Math.floor((ms / 1000) % 60);
        let minutes = Math.floor((ms / (1000 * 60)) % 60);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        milliseconds = milliseconds < 10 ? "0" + milliseconds : milliseconds;

        return minutes + ":" + seconds + ":" + milliseconds;
    }

    function startTimer() {
        setRunning(true);
    }
    function stopTimer() {
        setRunning(false);
    }

    useEffect(() => {
        if (running) {
            timerId.current = setTimeout(() => {
                setTime(time + 37);
            }, 37);
        } else {
            clearTimeout(timerId.current);
        }

        return () => {
            if (timerId.current) {
                clearTimeout(timerId.current);
            }
        };
    });

    //END TIMER//////////////////////////////////////////////////////////

    return (
        <div className="App2">

            <h1>GAME ROTATE: SOLTEX </h1>

            {/* <WordModal
                timer={convert(time)}
                moves1={moves}
            /> */}

            <div className="Titles">
                <h2 className="section">BOARD</h2>
            </div>
            <div className="GameboardContainer">
                <div className="boardSmall">
                    {cards.map((num, i) => {
                        if (num.id === 0) {
                            return <div className="tileBlank" key={num.id} />;
                        }
                        // checkWin();
                        return (
                            <div className={num.state} key={num.id} onClick={() => handleCardClickA(i)}>
                                <h1 className="letter">{num.letter}</h1>
                                <h6 className="letterSmall">{num.id}</h6>
                            </div>
                        );
                    })}
                </div>

                <div className="boardSmall">
                    {cards2.map((num, i) => {
                        if (num.id === 0) {
                            return <div className="tileBlank" key={num.id} />;
                        }
                        // checkWin();
                        return (
                            <div className={num.state} key={num.id} onClick={() => handleCardClickB(i)}>
                                <h1 className="letter">{num.letter}</h1>
                                <h6 className="letterSmall">{num.id}</h6>
                            </div>
                        );
                    })}
                </div>

                <div className="section">
                    {answerKeyArrPlayer.map((num, i) => {
                        return (
                            <div className={num.state} key={num.id} >
                                <h2 className="letter">{num.letter}</h2>
                            </div>
                        )
                    })}
                </div>

            </div>
        </div>
    );
}

export default App;