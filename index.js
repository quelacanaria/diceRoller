function rollDice(){
    let input = document.getElementById("input").value;
    const number = document.getElementById("numDice");
    const picture = document.getElementById("numPic");

    const numbers = [];
    const pictures = [];

    input = Number(input);

    if(input <= 0){
        alert("cannot enter a zero or less");
    }else{
        for(let i = 0; i < input; i++){
            const randomDice = Math.floor(Math.random() * 6) + 1;
            numbers.push(randomDice);
            pictures.push(`<img src="images/${randomDice}.png" alt="${randomDice    }.png">`);
        }

        number.textContent = `dice: ${numbers.join(`, `)}`;
        picture.innerHTML = pictures.join(''); 
    }
}