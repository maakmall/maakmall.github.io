import view from './view.js'

location.hash = "";
window.addEventListener("hashchange", function () {
  let fragment = location.hash ? location.hash.slice(1) : "home";
  loadView(fragment);
});

const content = document.getElementById("content");
const loadView = (name) => {
  flashScreen(name);
  setTimeout(() => {
    content.innerHTML = view[name];

    if (name == 'home') {
      floatingh1()
    } else if(name == 'contact') {
      contactMe()
    }
  }, 800);
};

// Flash Screen
const loadingScreen = document.getElementById("flash");
const flashScreen = (e) => {
  loadingScreen.classList.add("translate-y-0");
  loadingScreen.classList.remove("-translate-y-full");

  setTimeout(() => {
    let active = document.querySelectorAll(".active");
    active.forEach((a) => a.classList.remove("active"));

    active = document.querySelectorAll(`a[href="#${e}"]`);
    active.forEach((a) => a.classList.add("active"));

    document.title = `Portfolio | ${e.charAt(0).toUpperCase() + e.slice(1)}`;

    loadingScreen.classList.add("-translate-y-full");
    loadingScreen.classList.remove("translate-y-0");
  }, 1500);
};

// Load form
function contactMe() {
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbwNsTjic5tJ3fES0iJn5W6Ne6bI0GzUAaOH5NDQtTTocYekGpkiI9czarDK6uaD2l6zQg/exec";
  const form = document.forms["contact-form"];
  const buttonSend = document.querySelector('button[type="submit"] span')
  const buttonIcon = document.querySelector('button[type="submit"] i')

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    buttonSend.textContent = 'Sending...'

    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => {
        buttonSend.textContent = 'Send'
        buttonIcon.classList.replace('bi-send-fill', 'bi-send-check-fill')
        console.log(response)
        form.reset()
      })
      .catch((error) => console.error("Error!", error.message));
  });
}

// Floating Text Hi, I'am Akmal, Web Developer
function floatingh1() {
  const headings = document.querySelectorAll("h1");
  const floatingText = (element) => {
    const chars = [...element.textContent]
      .map((char) => {
        return char != " "
          ? `<span class='text-float'>${char}</span>`
          : `<span>&nbsp;</span>`;
      })
      .join("");
    element.innerHTML = chars;
  };
  headings.forEach((heading) => floatingText(heading));
}
floatingh1()

// Hidding Welcome Screen
setTimeout(() => {
  const welcome = document.getElementById("welcome");
  welcome.classList.replace("flex", "hidden");
}, 4500);