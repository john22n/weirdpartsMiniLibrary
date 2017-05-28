//gets a new object (the achritecture allows us to not have to use the 'new' keyword here)

var g = G$('john', 'doe');
//use our chainable methods
g.greet().setLang('es').greet(true).log();
//let's use our object on the click of the login button
$('#login').click(function() {

  //create a new 'Greetr' object (let's pretend we knwo the name from the login)
  var loginGrtr = G$('John', 'Doe');
  // hide the login onthe screen
  $('#logindiv').hide();
  // fire off an html greeting, passing the '#greeting' as the selector and the chosen language, and log the welcome as well
  loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();
});
