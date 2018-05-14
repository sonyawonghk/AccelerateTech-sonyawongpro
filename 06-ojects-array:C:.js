var players = [
    {name: "Lionel Messi", club: "FC Barcelona"},
    {name: "Christiano Ronaldo", club: "Real Madrid"},
    {name: "Luis Suarez", club: "FC Barcelona"},
    {name: "Gareth Bale", club: "Real Madrid"},
    {name: "Manuel Neuer", club: "FC Bayern Munchen"}
];
var filtered = players.filter(function(remain){
    return remain.club !== "FC Barcelona";
});

var allnames = players.map(function(remainNames){
    return remainNames.name;
});


console.log(filtered);
console.log(allnames);