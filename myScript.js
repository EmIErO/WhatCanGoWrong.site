function validateForm() {
    var x = document.forms["sendMessage"]["Name"].value;
    var y = document.forms["sendMessage"]["Email"].value;
    var z = document.forms["sendMessage"]["contactMessage"].value;
    if (x == "" || y == "" || z == "") {
        alert("Name must be filled out");
        return false;
    }
}
