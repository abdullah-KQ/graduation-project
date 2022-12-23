function LoginButton() {
    location.replace("../LoginPage/LoginPage.html");
}

function RegisterButton() {
    location.replace("../registerPage/registerpage.html");
}

const links = document.querySelectorAll(".header-button");
links.forEach(function (item) {
    item.addEventListener("click", function () {
        const element = document.getElementById(item.getAttribute("data-link"));
        element.scrollIntoView()
    })
})

