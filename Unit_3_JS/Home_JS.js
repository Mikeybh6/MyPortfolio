"use strict";
var randomQ = randomInt(0, 10);

var quoteElem = document.getElementsByTagName("quote")[0];

quoteElem.innerHTML = getQuote(randomQ);

function randomInt(lowest, size) {
   return Math.floor(lowest + size*Math.random());
}

function getQuote(n) {
   var quotes = [
      {quote: "Never apologize for your success.", source: "- Nipsey Hussle"},
      {quote: "A man who procrastinates in his choosing will inevitably have his choice made for him by circumstance.", source: "- Hunter S. Thompson"},
      {quote: "Too weird to live, too rare to die!", source: "- Hunter S. Thompson"},
      {quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.", source: "- Winston Churchill"},
      {quote: "Experience is not what happens to you; it is what you do with what happens to you.", source: "- Aldous Huxley"},
      {quote: "You miss 100% of the shots you don't take.", source: "- Wayne Gretzky"},
      {quote: "Without music, life would be a mistake.", source: "- Friedrich Nietzsche"},
      {quote: "Life has become immeasurably better since I have been forced to stop taking it seriously.", source: "- Hunter S. Thompson"},
      {quote: "Live as if you were to die tomorrow. Learn as if you were to live forever.", source: "- Mahatma Gandhi"},
      {quote: "Ownership is everything. Own your mind, mind your own.", source: "- Nipsey Hussle"}
  ];
  
  function getRandomIndex() {
      return Math.floor(Math.random() * quotes.length);
  }
  
  window.onload = function() {
      var quoteContainer = document.querySelector('.quote-container');
      var quoteElement = quoteContainer.querySelector('quote');
      var citeElement = quoteContainer.querySelector('cite');
  
      
      var randomIndex = getRandomIndex();
      var currentQuote = quotes[randomIndex];
      var quoteText = currentQuote.quote;
      var sourceText = currentQuote.source;
  
      
      quoteElement.textContent = quoteText;
      citeElement.textContent = sourceText;
  };
}