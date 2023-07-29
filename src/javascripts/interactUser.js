const navDown = document.getElementById("navDown");
const navToggle = document.getElementById("navToggle");

navToggle.addEventListener("click", function () {
  navDown.classList.toggle("hidden");
  navDown.classList.toggle("block");
});

const texts = [
  "Team Code",
  "Web Develop",
  "Data Science",
  "UI/UX Design",
  "Game"
  // Add more texts to loop through here
];

const typingTextElement = document.getElementById("typingText");
let currentTextIndex = 0;

function typeWriter(text, element) {
  let charIndex = 0;
  const typingInterval = 100; // Time between each character typing (in milliseconds)

  function type() {
    if (charIndex < text.length) {
      element.textContent += text.charAt(charIndex);
      charIndex++;
      setTimeout(type, typingInterval);
    }
  }

  function eraseText() {
    let textLength = element.textContent.length;
    if (textLength > 0) {
      element.textContent = element.textContent.slice(0, textLength - 1);
      setTimeout(eraseText, 50); // Time between each character erasing (in milliseconds)
    } else {
      setTimeout(startTyping, 1000); // Time to wait before starting the next typing animation (3 seconds)
    }
  }

  type();
  setTimeout(eraseText, 5000); // Time to wait before erasing the text (5 seconds)
}

function startTyping() {
  typingTextElement.textContent = ""; // Clear the existing text
  typeWriter(texts[currentTextIndex], typingTextElement);
  currentTextIndex = (currentTextIndex + 1) % texts.length; // Move to the next text
}

// Start the typing animation when the page is loaded
document.addEventListener("DOMContentLoaded", function () {
  startTyping();
});