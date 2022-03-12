const mathLibrary = require('./lib/math');
const quotesLibrary = require('./lib/quotes');

const app = {};
app.config = {
    timeBetweenQuotes: 1000,
};
app.printAQuote = () => {
    const allQuotes = quotesLibrary.allQuotes();
    const numberOfQuotes = allQuotes.length;
    const randomNumber = mathLibrary.getRandomNumber(1, numberOfQuotes);
    const selectedQuote = allQuotes[randomNumber - 1];
    console.log(selectedQuote);
};
app.indefiniteLoop = () => {
    setInterval(app.printAQuote, app.config.timeBetweenQuotes);
};
app.indefiniteLoop();
