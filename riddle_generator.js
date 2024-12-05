
const riddles = [
    { question: "What has to be broken before you can use it?", answer: "An egg" },
    { question: "I’m tall when I’m young, and I’m short when I’m old. What am I?", answer: "A candle" },
    { question: "What has hands but can’t clap?", answer: "A clock" },
    { question: "What can travel around the world while staying in the same corner?", answer: "A stamp" }
];

function generateRiddle() {
    const randomRiddle = riddles[Math.floor(Math.random() * riddles.length)];
    document.getElementById('riddle-question').textContent = randomRiddle.question;
    document.getElementById('riddle-answer').textContent = `Answer: ${randomRiddle.answer}`;
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('generate-riddle-btn').addEventListener('click', generateRiddle);
});
