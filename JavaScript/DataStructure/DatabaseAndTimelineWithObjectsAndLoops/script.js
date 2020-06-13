var database = [

    {
        username: "andrei",
        password: "supersecret"
    },
    
    {
       username: "Michael",
       password:"scofield"
    },

    {
    	username: "Salamat",
    	password: "HpEnvy"
    }

];


var newsfeed = [

      {
      	username: "Bobby Razzmatazz",
      	password: "So tired from all that JS!"
      }, 

      {
      	username: "Sally", 
      	password: "JavaScript is so exhausting"
      },

      {
      	username: "Mitch",
      	password: "What a sharp intuition you\'ve got"
      }

];

function isUserValid(user, pass) {
	 for(var i = 0; i < database.length; i++) {
		if(database[i].username === user  && database[i].password === pass) {

			return true;
		}
	
	}
	return false;
}

function signIn(username, password) {
	// console.log(isUserValid(username,password)); - used to check results of previous function
    if (isUserValid(username,password)) {
    	console.log(newsfeed);
    } else {
    	alert("Sorry, wrong username and/or password 😢");
    }

}


var usernamePrompt = prompt("What\'s your username?");
var passwordPrompt = prompt("What\'s your password?");

signIn(usernamePrompt,passwordPrompt);