import bot from './assets/bot.png';
import user from './assets/user.png';

const form = document.querySelector('form');
const chat = document.querySelector('#chat-container');

let loadInterval;

function loader(element) {
  element.textContent = "";

  loadInterval = setInterval(() => {
    element.textContent += ".";

    if (element.textContent === "....") {
      element.textContent = "";
    }
  }, 300);
};

function typeText(element, text) {
  let i = 0;

  let interval = setInterval(() => {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
    } else {
      clearInterval(interval);
    }
  }, 20);
};

function generateId() {
  const timestamp = Date.now();
  const randomNumber = Math.random();
  const hexadecimalString = randomNumber.toString(16);

  return `id-${timestamp}-${hexadecimalString}`;
};

function chatArea(isAi, value, id) {
  return `
    <div class='wrapper' ${isAi && "ai"}>
      <div class='chat'>
        <div classe='profile'>
          <img src="${isAi ? bot : user}" alt=${isAi ? "bot" : "user"} />
        </div>
        <div class='message' id=${id}>${value}>
        </div>
      </div>
    </div>`;
};

const handleSubmit = async (e) => {
  e.preventDefault();

  const data = new FormData(form);

  chat.innerHTML += chatArea(false, data.get("prompt"));

  form.reset();

  const id = generateId();
  chat.innerHTML += chatArea(true, " ", id);

  chat.scrollTop = chat.scrollHeight;

  const message = document.getElementById(id);

  loader(message);
};

form.addEventListener("submit", handleSubmit);
form.addEventListener('keyup', (e) => {
  if (e.keyCode === 13) {
    handleSubmit(e);
  }})