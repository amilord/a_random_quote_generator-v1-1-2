/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/
// For assistance: 
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat
//created an array of objects to store the data for my quotes and added data to my quite objects
var quotes = [
  {
    quote: 'Everything I did wrongly is an experience… to be honest and truthful in all endeavours is an experience, not a regret.',
    source: 'Fela Kuti',
    citation: 'https://thisisafrica.me/lifestyle/felabration-week-remembering-fela-kuti-10-quotes/',
  },
  {
    quote: 'Nobody in the world, nobody in history, has ever gotten their freedom by appealing to the moral sense of the people who were oppressing them.',
    source: 'Assata Shakur',
    citation: 'Assata: An Autobiography',
    year: 1987
  },
  // I refactored the year property to match the instructions so that it is a number instead of a string//
  {
    quote: 'The greatest weapon in the hand of the oppressor is the mind of the oppressed.',
    source: 'Steven Biko',
  },
  {
    quote: 'Death is not the greatest loss in life. The greatest loss is what dies inside while still alive. Never surrender.',
    source: 'Tupac Shakur',
  },
  {
    quote: 'Without a game plan and without a strong sense of faith in what you are doing, it is gonna be real hard to accomplish anything.',
    source: 'Nipsey Hussle',
  }
];
//getRandomQuote` function returns a random quote object from the quotes array.
function getRandomQuote( array ) {
  var quoteIndex = Math.floor( Math.random() * ( quotes.length ) );
  var randomQuote = array[ quoteIndex ];
  return randomQuote;
}
var randomQuote = getRandomQuote( quotes );
//printQuote function displays a new quote each time the user clicks the "Show another quote" button using the printQuote function
function printQuote() {
  var yourStringHere = "";
  var randomQuote = getRandomQuote( quotes );
  yourStringHere += "<p class='quote'>" + randomQuote.quote + "</p>";
  yourStringHere += "<p class='source'>" + randomQuote.source;
  // Created conditional statements to determine what prints  to the page which fixed the properties printing as undefined which i mentioned in my read.me file/// 
  if ( randomQuote.citation ) {
    yourStringHere += "<span class='citation'>" + randomQuote.citation + "</span>";
  }
  if ( randomQuote.year ) {
    yourStringHere += "<span class='year'>" + randomQuote.year + "</span>";
  }
  yourStringHere += "</p>";
  document.getElementById( 'quote-box' ).innerHTML = yourStringHere;
}
printQuote();
document.getElementById( 'load-quote' ).addEventListener( "click", printQuote, false );
