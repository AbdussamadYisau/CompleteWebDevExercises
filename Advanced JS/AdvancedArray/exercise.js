// Complete the below questions using this array:
const player = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames

const playerUsername = [];

const newUsername = player.forEach((user) => {
      let {username} = user;
      username = username + "!";

       playerUsername.push(username);
});

console.log(playerUsername); // (4) ["john!", "becky!", "susy!", "tyson!"]

//Create an array using map that has all the usernames with a "? to each of the usernames

const mapPlayer = player.map((user) => {
      let {username} = user;
      username = username + "?";
      return (username);
  
});

console.log("Mapped Array: ", mapPlayer); // Mapped Array:  (4) ["john!", "becky!", "susy!", "tyson!"]

//Filter the array to only include users who are on team: red

const filterPlayer = player.filter((user) => {
   let {username, team} = user;
   
    return (team === "red");

});

console.log("Filtered Array: ", filterPlayer); 
/*Filtered Array: 0: {username: "john", team: "red", score: 5, items: Array(3)}
1: {username: "susy", team: "red", score: 55, items: Array(3)} */


//Find out the total score of all users using reduce


const total = player.reduce((acc, user) => {

  let {score} = user;
  return (acc + score);
}, 0);

console.log("reduce:", total); // reduce: 71



// (1), what is the value of i? // Index of the array
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newNumArray = arrayNum.map((num, i) => {
	// console.log(num, i);
	// alert(num);
	return num * 2;
})

console.log("newArray", newNumArray);
//BONUS: create a new list with all user information, but add "!" to the end of each items they own.


const answer = player.map(user => {

  let {items} = user;
  user.items = items.map(item => {
    return (item + "!");
  });
  return user;
});
console.log(answer);
