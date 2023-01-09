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
    if (index < text.length) {
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

function chatStripe(isAi, value, uniqueId) {
  return `
    <div class='wrapper' ${isAi && "ai"}>
      <div class='chat'>
        <div classe='profile'>
          <img src="${isAi ? bot : user}" alt=${isAi ? "bot" : "user"} />
        </div>
        <div class='message' id=${uniqueId}>${value}>
        </div>
      </div>
    </div>`;
}