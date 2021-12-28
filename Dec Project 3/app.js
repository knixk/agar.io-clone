
const body = document.getElementsByTagName('body');

const pellet = document.getElementById('pellet');

console.log("I am pellet", pellet);

const player = document.getElementById("player")

let topX = 300;
let bottomX = 300;
let leftX = 0;
let rightX = 0;

player.style.top += topX + "px";
player.style.bottom += bottomX + "px";
player.style.left += leftX + "px";
player.style.right += rightX + "px";


document.addEventListener("keydown", (e) => {

    // var leftNumbers = player.style.top.replace('px', '')
    // var left = parseInt(leftNumbers, 10)

    // player.style.left = `${left - 1}px`;
    // player.style.top += "300px";
    
    // console.log(topX);


    // console.log(player.style);
    // console.log(("working"));

    // console.log(leftNumbers);

    movingMap(e);    

    // player.style.background = "red";

})

console.log(player);

function movingMap(e) {

    switch(e.key) {
        case "ArrowUp":
            player.style.top = topX + "px";
            topX -= 40;
            player.style.bottom = bottomX + "px";
            // bottomX += 40;
            // console.log(bottomX);
            console.log("Moving up!");
            break;
        case "ArrowDown":
            player.style.top = topX + "px";
            topX += 40;
            console.log("Moving down!");
            break;
        case "ArrowLeft":
            player.style.left = leftX + "px";
            leftX -= 40;
            player.style.right = rightX + "px";
            console.log(leftX);
            console.log("Moving left!");
            break;
        case "ArrowRight":
            player.style.left = leftX + "px";
            leftX += 40;
            console.log(leftX);
            console.log("Moving right!");
            break;
    }
    
}

function isTouching() {

}