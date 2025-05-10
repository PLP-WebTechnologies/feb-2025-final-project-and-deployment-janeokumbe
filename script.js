document.getElementById("contact-form")?.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const response = document.getElementById("response");

  if (name && email && message) {
    response.textContent = "Thank you for your message!";
    this.reset();
  } else {
    response.textContent = "Please fill in all fields.";
  }
});
document.getElementById("toggle-menu")?.addEventListener("click", function () {
  const menu = document.getElementById("menu");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
});
