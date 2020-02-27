/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

var quotes = [
  { quote: 'Everything I did wrongly is an experience… to be honest and truthful in all endeavours is an experience, not a regret.',
          source: 'Fela Kuti',
                 citation: 'https://thisisafrica.me/lifestyle/felabration-week-remembering-fela-kuti-10-quotes/',
  },

  { 
    quote: 'Nobody in the world, nobody in history, has ever gotten their freedom by appealing to the moral sense of the people who were oppressing them.',
          source: 'Assata Shakur',
                 citation: 'Assata: An Autobiography',
                          year: '1987'
  },

  {
    quote: 'The greatest weapon in the hand of the oppressor is the mind of the oppressed.',
          source: 'Steven Biko',
  },

  {
    quote: 'Death is not the greatest loss in life. The greatest loss is what dies inside while still alive. Never surrender.',
          source: 'Tupac Shakur',
  },

  {
    quote: 'Without a game plan and without a strong sense of faith in what you’re doing, it’s gonna be real hard to accomplish anything.',
          source: 'Nipsey Hussle',
  
  }
];


/***
 * `getRandomQuote` function
***/

function getRandomQuote(array) {
  var quoteIndex = Math.floor( Math.random() * (quotes.length));
            for (var i = 0; i < array.length; i++) {
                    var randomQuote = array[quoteIndex];
}
return randomQuote;
}
var randomQuote = getRandomQuote(quotes);
console.log(randomQuote);


/***
 * `printQuote` function
***/
function printQuote() {
  var yourStringHere = "";    
  var randomQuote = getRandomQuote(quotes);
                 yourStringHere += "<p class='quote'>" + randomQuote.quote + "</p>";
                                 yourStringHere += "<p class='source'>" + randomQuote.source;
                                                 yourStringHere += "<span class='citation'>" + randomQuote.citation + "</span>";
                                                                yourStringHere += "<span class='year'>" + randomQuote.year + "</span>"
                                                                                yourStringHere += "</p>";

  document.getElementById('quote-box').innerHTML = yourStringHere;
}

printQuote();


document.getElementById('load-quote').addEventListener("click", printQuote, false);








