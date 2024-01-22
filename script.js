const quotes = [
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "It always seems impossible until it’s done.",
    "The only limit to our realization of tomorrow will be our doubts of today.",
    "Do not wait to strike till the iron is hot, but make it hot by striking.",
    "Your time is limited, don't waste it living someone else's life.",
    "Believe you can and you're halfway there.",
    "The best way to predict the future is to create it.",
    "Don't count the days, make the days count.",
    "If you want to achieve greatness stop asking for permission.",
    "Don't watch the clock; do what it does. Keep going.",
    "The future belongs to those who believe in the beauty of their dreams."
    // Add more quotes as needed
];

document.getElementById('quote-text').textContent = getRandomQuote();

let startTime;

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

const wordsPerMinute = 200;

function checkTypingSpeed() {
    if (!startTime) {
        startTime = performance.now();
    }

    const userInput = document.getElementById('user-input').value;
    const userWords = userInput.split(/\s+/).filter(word => word !== '');

    const quoteWords = document.getElementById('quote-text').textContent.split(/\s+/).filter(word => word !== '');
    const totalWords = quoteWords.length;

    const correctWords = userWords.reduce((count, word, index) => {
        return count + (word === quoteWords[index] ? 1 : 0);
    }, 0);

    const accuracy = (correctWords / totalWords) * 100;
    const elapsedTimeInSeconds = (performance.now() - startTime) / 1000; // Convert milliseconds to seconds
    const typingSpeed = Math.round((totalWords / elapsedTimeInSeconds) * 60);

    displayResult(typingSpeed, accuracy);
}

function displayResult(speed, accuracy) {
    const speedElement = document.getElementById('speed');
    const accuracyElement = document.getElementById('accuracy');

    speedElement.textContent = speed;
    accuracyElement.textContent = accuracy.toFixed(2);
}
