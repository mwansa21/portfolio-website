const menuBtn = document.getElementById("menu-btn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {

        e.preventDefault();

        const target =
        document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({
            behavior: "smooth"
        });
    });
});

document
.getElementById("contact-form")
.addEventListener("submit", function(e){

    e.preventDefault();

    let name =
    document.getElementById("name").value;

    let email =
    document.getElementById("email").value;

    let message =
    document.getElementById("message").value;

    let feedback =
    document.getElementById("form-message");

    if(
        name === "" ||
        email === "" ||
        message === ""
    ){
        feedback.textContent =
        "Please fill in all fields.";
    }
    else{
        feedback.textContent =
        "Message sent successfully!";
    }
});
