

let counter = 0;
let chances = 4
let predict;
let wagon = Math.floor((Math.random() * 10) + 1)



while (chances > 0) {
    chances--;
    counter++;
    predict = Number(prompt("Guess? Which wagon?"));

    if (predict == wagon) {
        console.log("Congratilions!  You have found at  the ", counter, " th predict. Your score is at the below");
        console.log(100 - (counter - 1) * 20)

        break;

    }

    else if (wagon > predict) {
        console.log("Up!")
    }
    else if (wagon < predict) {
        console.log("down!")
    }

    if (chances == 0) {
        console.log("There is no more chance left. Try again!")
    }
    if (predict > 10 || predict < 1) {
        console.log("please type a valid number between (1-10) ");
        chances++;
        counter--;
    }
}
