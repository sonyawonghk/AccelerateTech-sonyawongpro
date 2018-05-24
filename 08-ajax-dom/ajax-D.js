
class User {
    constructor(options) {
        this.firstName = options.name.First;
        this.lastName = options.name.Last;
        this.email = options.Email;
        this.dateOfBirth = options.DateofBirth;
    }
}

function callAPIuser(){
var http = new XMLHttpRequest();
http.onreadystage =function (){
    if (http.readyState !=XMLHttpRequest.DONE){
        return;
    }else if (http.status == 200) {
        var parse =JSON.parse (http.responseText);
        debugger;
        var users = parsed.results.map(function(user) {
            return new User(user);
    });
    console.log (users);
}else {
    console.log ('error occurred' + http.status);
}

http.open ('GET', 'https://randomuser.me/api/?result=5');
http.send ();
}

callAPIuser ()};
