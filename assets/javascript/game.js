$(document).ready(function () {
  var _questionPool = [
    { id: 1, picture: "http://placehold.it/32x32", question: "If cats are feline, and dogs, canine, then what are bears?.", options: { 1: "Cervine ", 2: "Ranine ", 3: " Ursine", 4: "Leporine" }, answer: " Ursine" },
    { id: 2, picture: "http://placehold.it/32x32", question: "What is the average temperature of the human body, in degrees centigrade? ", options: { 1: "42", 2: "37", 3: "64", 4: "28" }, answer: "37" },
    { id: 3, picture: "http://placehold.it/32x32", question: "Name the craft of knotting threads to create decorative yet useful objects.", options: { 1: "Macrame", 2: "kniting", 3: "Quilting", 4: "Sewing" }, answer: "Macrame" },
    { id: 4, picture: "http://placehold.it/32x32", question: "Name the seventh planet from the sun", options: { 1: "Mars", 2: "Jupier", 3: "Uranus", 4: "Saturn" }, answer: "Uranus" },
    { id: 5, picture: "http://placehold.it/32x32", question: "Which country is Prague in?", options: { 1: "A", 2: "B", 3: "C", 4: "D" }, answer: "Czech Republic" },
    { id: 6, picture: "http://placehold.it/32x32", question: "Who played Neo in The Matrix?", options: { 1: "A", 2: "B", 3: "C", 4: "D" }, answer: "Keanu Reeves" },
    { id: 7, picture: "http://placehold.it/32x32", question: "Which kind of bulbs were once exchanged as a form of currency? ", options: { 1: "A", 2: "B", 3: "C", 4: "D" }, answer: "Tulips" },
    { id: 8, picture: "http://placehold.it/32x32", question: "Name the game played on a lawn called a 'crown green'", options: { 1: "A", 2: "B", 3: "C", 4: "D" }, answer: "Bowls" },
    { id: 9, picture: "http://placehold.it/32x32", question: "Who was Henry VIll's first wife?", options: { 1: "A", 2: "B", 3: "C", 4: "D" }, answer: "Catherine of Aragon" },
    { id: 10, picture: "http://placehold.it/32x32", question: "What flavour is Cointreau?", options: { 1: "A", 2: "B", 3: "C", 4: "D" }, answer: "Orange" },
    { id: 11, picture: "http://placehold.it/32x32", question: "What kind of weapon is a falchion?", options: { 1: "A", 2: "B", 3: "C", 4: "D" }, answer: "A sword" },
    { id: 12, picture: "http://placehold.it/32x32", question: "Name the world's largest ocean.", options: { 1: "A", 2: "B", 3: "C", 4: "D" }, answer: "Pacific" },
    { id: 13, picture: "http://placehold.it/32x32", question: "13Labore aute esse sunt duis sunt ex ex.", options: { 1: "A", 2: "B", 3: "C", 4: "D" }, answer: "A" },
    { id: 14, picture: "http://placehold.it/32x32", question: "The Grand Canyon is located in which U.S. state?", options: { 1: "A", 2: "B", 3: "C", 4: "D" }, answer: "Arizona" },
    { id: 15, picture: "http://placehold.it/32x32", question: "What song from the Disney film â€œCocoâ€ won the 2018 Academy Award for Best Original Song? ", options: { 1: "A", 2: "B", 3: "C", 4: "D" }, answer: "Remember me" }
  ]

  var _randomIndex;
  var _answwerPosition = [1, 2, 3, 4];
  var _counter = 30;
  var _questionCounter = 1;
  var _answerSelected = false;

  function setUpQuestion(number) {
    resetAll();
    if (number > 3) {
      clearInterval(timer);
    }

    shuffle(_answwerPosition);

    var currentQuestion = _questionPool.filter(item => item.id == number)[0];

    $("#question").text(currentQuestion.question);

    var answerOptions = currentQuestion.options;

    for (var i = 0; i < _answwerPosition.length; i++) {
    
      var $div = $("<div></div>");
      $div.attr("id", _answwerPosition[i]);
        i == 0 || i == 2 ? $div.addClass("align-left") : $div.addClass("align-right");

      $div.text(answerOptions[_answwerPosition[i]]);     //
      for (key in answerOptions) {

        if (currentQuestion.answer == answerOptions[_answwerPosition[i]]) {
          $div.addClass("option correct-answer");
        } else {
          $div.addClass("option wrong-answer");
        }
      }

      $div.on("click", clickedOption);
      $("#answer-box").append($div);
    }
    
    console.log("on setup current question " + _questionCounter);
    _questionCounter++;
  }

  setUpQuestion(1);

  function resetAll() {
     $(".option" ).on( "mouseenter mouseleave" );
    $("#btnNext").hide();
    _counter = 30;
    $("#answer-box").empty();
    $("#question").empty();
    $(".option").css("background-color", "");
    _answerSelected = false;

  }

//   $(".option").on("click", function () {
//     _answerSelected = true;
//     var id = "#" + this.id;
//     if ($(id).hasClass("correct-answer")) {
//       $(id).css("background-color", "#50BFE6");
//     } else {
//       $(id).css("background-color", "#FD0E35");
     
//     }

//      $("#btnNext").show();
//   });

  function clickedOption(){
     $(".option" ).off( "mouseenter mouseleave" );
    _answerSelected = true;
    var id = "#" + this.id;
    if ($(id).hasClass("correct-answer")) {
      $(id).css("background-color", "#50BFE6");
    } else {
      $(id).css("background-color", "#FD0E35");
    }
     $("#btnNext").show();
  }

  function showCorrecteAnswer() {
    if (_answerSelected == false) {
      $(".correct-answer").css("background-color", "#50BFE6");
    }
  }

  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function addTimerToPage() {
    if (_counter > 0) {
      var $p = $("<p></p>");
      $p.text(_counter);
      _counter--;
      $("#timer").text(_counter);
    } else {
      showCorrecteAnswer();
      $("#btnNext").show();
    }
  }

  var timer = setInterval(addTimerToPage, 1000);

  $("#btnNext").on("click", function () {
    resetAll();
    setUpQuestion(_questionCounter);
  });


  $(".option").mouseover(function() {
    $( this ).css("background-color", "#50BFE6");
  }).mouseout(function() {
    $( this ).css("background-color", "");
  });

//   $(".option" ).off( "mouseenter mouseleave" );

});
