function login() {
    document.getElementById("signin_container").removeAttribute("hidden");
    document.getElementById("create_container").setAttribute("hidden", true);
}

function register() {
    document.getElementById("create_container").removeAttribute("hidden");
    document.getElementById("signin_container").setAttribute("hidden", true);
}