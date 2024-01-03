//This function is a rock paper scissors game


const rps = (p1, p2) => {
  if (p1 === p2)
    return "Draw!";
  if (p1 === "rock"){
    if (p2 === "scissors")
      return "Player 1 won!";
    if (p2 === "paper")
      return "Player 2 won!";
  }
  /*if (p2 === "rock")
    if (p1 === "scissors")
      return "Player 2 won!";
    if (p1 === "paper")
      return "Player 1 won!";*/
  if (p1 === "paper"){
    if (p2 === "scissors")
      return "Player 2 won!";
    if (p2 === "rock")
      return "Player 1 won!";
  }
  /*if (p2 === "paper")
    if (p1 === "scissors")
      return "Player 1 won!";
    if (p1 === "rock")
      return "Player 2 won!";*/
  if (p1 === "scissors"){
    if (p2 === "rock")
      return "Player 2 won!";
    if (p2 === "paper")
      return "Player 1 won!";
  }
  /*if (p2 === "scissors")
    if (p1 === "rock")
      return "Player 1 won!";
    if (p1 === "paper")
      return "Player 2 won!";*/
};





//A wayy better solution


const rps = (p1, p2) => {
  if (p1 === p2) return "Draw!";

  const winConditions = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
  };

  if (winConditions[p1] === p2) {
    return "Player 1 won!";
  } else {
    return "Player 2 won!";
  }
};

