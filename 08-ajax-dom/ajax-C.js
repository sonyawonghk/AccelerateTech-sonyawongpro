
function whoIsInSpace(nm) {
    var http = new XMLHttpRequest();
    // [ http.onreadystage] needs to placed before [http.send]
    http.onreadystage = function () {
        if (http.readyState != XMLHttpRequest.DONE) {
            return;
        } else if (http.status == 200) {
            var parsed = JSON.parse(http.responseText);
            debugger;
            //use debugger to check line by line for bug-shooting
            //use console.log (parsed) to show parse --> x string form, but array 
            nm(parsed.people.map(function (person) {
                return person.name;
            }));
        } else {
            console.log('error occurred' + http.status);
        }
        ;
        http.open('GET', `http://api.open-notify.org/astros.json`);
        http.send();

    }

    whoIsInSpace(function (names) {
        console.log(names);
    });
}
