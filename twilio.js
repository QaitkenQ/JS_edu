var settings = {
    "url": "https://api.twilio.com/2010-04-01/Accounts/ACa223d0282f48ac705b33c3c1c6c4cbd6/Messages.json",
    "method": "POST",
    "timeout": 0,
    "headers": {
      "Authorization": "Basic QUNhMjIzZDAyODJmNDhhYzcwNWIzM2MzYzFjNmM0Y2JkNjpmMThmOTc1NDQzMmNkZWMyZGEzYzkyOTE2OWVhYjg3MQ==",
      "Content-Type": "application/x-www-form-urlencoded"
    },
    "data": {
      "To": "+79518564562",
      "Body": "What is an API? Learn all about APIs (Application Programming Interfaces) in this full tutorial for beginners.",
      "From": "+13185158534"
    }
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });