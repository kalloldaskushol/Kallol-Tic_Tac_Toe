let boxes = document.querySelectorAll(".box");
let reset_btn = document.querySelector(".reset");

let new_btn = document.querySelector("#new");
let msg_con = document.querySelector(".msg_Cointainer");
let msg = document.querySelector("#msg");

let currentPlayer = true; // true for X, false for O

// Defining winning patterns
const winningCombinations = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

// Function that will check the winner
const checkWinner = () => {
    for (let eachPattern of winningCombinations){
        let pos1Val = boxes[eachPattern[0]].innerText; // X or O
        let pos2Val = boxes[eachPattern[1]].innerText;
        let pos3Val = boxes[eachPattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("Winner 🔥", pos1Val);
                showWinner(pos1Val);
                disableBoxs();
            }
        }
    }
}

// Disable buttons after the winner is hit 
const disableBoxs =  () => {
    boxes.forEach(box => {
        box.disabled = true;
    });

} 

boxes.forEach((box) => {
    
    box.addEventListener("click", () => {
        if(currentPlayer) {
            box.innerText = "X";
            currentPlayer = false;
        }
        else {
            box.innerText = "O";
            currentPlayer = true;
        }

        box.disabled = true;
        
        // Animate the box
        box.classList.add("clicked");
        setTimeout(() => {
        box.classList.remove("clicked");
    }, 300);

        checkWinner();
    });
});

const showWinner = (winner) => {
    msg.innerText = `Congrats! The winner is ${winner}`;
    msg_con.classList.remove("hide");
    msg_con.classList.add("show");
    reset_btn.classList.add("hide");
}


reset_btn.addEventListener("click", () => {
    currentPlayer = true;
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false; // ✅ re-enable clicking
    })
})

new_btn.addEventListener("click", () => {
    currentPlayer = true;

    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    })
    
    msg_con.classList.remove("show");
    msg_con.classList.add("hide");
    reset_btn.classList.remove("hide");
    reset_btn.classList.add("show");

})

// animation
box.classList.add("clicked");

setTimeout(() => {
	box.classList.remove("clicked");
}, 300);
