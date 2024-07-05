function rollDice() {
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];
  
    const diceUnicode = [
      "&#9856;", // ⚀
      "&#9857;", // ⚁
      "&#9858;", // ⚂
      "&#9859;", // ⚃
      "&#9860;", // ⚄
      "&#9861;"  // ⚅
    ];
  
    for (let i = 0; i < numOfDice; i++) {
      const value = Math.floor(Math.random() * 6) + 1;
      values.push(value);
      images.push(`<span style="font-size: 2em;">${diceUnicode[value - 1]}</span>`);
    }
  
    diceResult.textContent = `Dice: ${values.join(', ')}`;
    diceImages.innerHTML = images.join(' ');
  }
  