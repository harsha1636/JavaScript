let boxes= document.querySelectorAll(".box ");  // select multiple elements from the DOM using CSS selectors
let resetBtn=document.querySelector("#reset-btn");   //select a single element from the DOM based on a specified CSS selector
let newGamebtn= document.querySelector('#new-btn');   // to work on new button by using css selector
let turn_0= true;

//winning patterns in the game
//array in array A[[a1],[a2]....]
const winPatterns=[ 
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

// for reset button and for new game
const resetGame = () => {
    turn_0=true;
    EnableBoxes();
}
// to display the x and o one the boxes 
// addEventListener is to add an functioanlity for the button
boxes.forEach((box) => {
    box.addEventListener("click", () =>{
       // console.log("box is clicked");
        if(turn_0) {  // player O
            box.innerText='O';
            turn_0=false;         // default boolean value is true
        }
        else{       // player x
            box.innerText='X';
            turn_0=true;
        }
        box.disabled = true;  // donot repeat on same button

        checkWinner();
    });
});

// To disable boxes
const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled=true;
    }
}

// To enable boxes
const EnableBoxes = () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText = "" ;
    }
}

// function to check the pattern
const checkWinner =() => {
    for(let pattern of winPatterns) {

        let pos1Val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        // to display winner
        if(pos1Val != "" && pos2val != "" && pos3val !=""){
            if (pos1Val === pos2val && pos2val === pos3val){
                alert(pos1Val+" is the Winner"); // displays an alert message of the winner
                disableBoxes();
            }

        }
    }
}

newGamebtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);