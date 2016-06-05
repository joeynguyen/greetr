var g = G$('John', 'Doe');
console.log(g);
g.greet(true).setLang('es').log().greet(true);

$('#login').click(function() {
  var loginGrtr = G$('John', 'Doe');
  var selectedLang = $('#lang').val();

  $('#logindiv').hide();

  loginGrtr.setLang(selectedLang).HTMLGreeting('#greeting', true).log();
});

