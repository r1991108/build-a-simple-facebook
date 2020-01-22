var database=[
    {
        username: "Ben",
        password: "benben",
    }
];

var newsFeed =[
    {
        username: "Bobby",
        timeline: "So tired.",
    },
    {
        username: "Sally",
        timeline: "Javascript is so cool!",
    }
];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?")

 function signIn(user, pass) {
    if(user === database[0].username && pass === database[0].password){
        console.log(newsFeed);
    }else{
        alert("Sorry, wrong info");
    }
 }

 signIn(userNamePrompt,passwordPrompt)