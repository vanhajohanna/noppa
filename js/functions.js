document.getElementById("dice").addEventListener("click", function() {
    const randomNumber = Math.floor(Math.random() * 6) + 1;

    document.querySelector("#dice img").src = `./img/${randomNumber}.png`;
})

