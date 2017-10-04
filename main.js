$('#submit-btn').click(changeBackground);

function changeBackground(event) {
  event.preventDefault();
  var userInput = $('#city-type').val();
  userInput = userInput.toLowerCase();
  if (userInput === 'nyc' || userInput === 'new york') {
    $('body').addClass('nyc');
  } else if (userInput === 'austin') {
    $('body').addClass('austin');
  } else if (userInput === 'la' || userInput === 'los angeles ') {
    $('body').addClass('la');
  } else if (userInput === 'sf' || userInput === 'san francisco') {
    $('body').addClass('sf');
  } else if (userInput === 'sydney') {
    $('body').addClass('sydney');
  }
}
