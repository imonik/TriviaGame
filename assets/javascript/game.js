$(document).ready(function () {
  var _questionPool = [
    { id: 1, picture: "http://placehold.it/32x32", category: 5, question: "1Labore aute esse sunt duis sunt ex ex.", options: { 1: "A", 2: "B", 3: "C", 4: "D" }, answer: "C" },
    { id: 2, picture: "http://placehold.it/32x32", category: 5, question: "2Labore aute esse sunt duis sunt ex ex.", options: { 1: "A", 2: "B", 3: "C", 4: "D" }, answer: "A" },
    { id: 3, picture: "http://placehold.it/32x32", category: 5, question: "3Labore aute esse sunt duis sunt ex ex.", options: { 1: "A", 2: "B", 3: "C", 4: "D" }, answer: "D" },
    { id: 4, picture: "http://placehold.it/32x32", category: 5, question: "4Labore aute esse sunt duis sunt ex ex.", options: { 1: "A", 2: "B", 3: "C", 4: "D" }, answer: "C" },
    { id: 5, picture: "http://placehold.it/32x32", category: 5, question: "5Labore aute esse sunt duis sunt ex ex.", options: { 1: "A", 2: "B", 3: "C", 4: "D" }, answer: "B" },
    { id: 6, picture: "http://placehold.it/32x32", category: 5, question: "6Labore aute esse sunt duis sunt ex ex.", options: { 1: "A", 2: "B", 3: "C", 4: "D" }, answer: "B" },
    { id: 7, picture: "http://placehold.it/32x32", category: 5, question: "7Labore aute esse sunt duis sunt ex ex.", options: { 1: "A", 2: "B", 3: "C", 4: "D" }, answer: "A" },
    { id: 8, picture: "http://placehold.it/32x32", category: 5, question: "8Labore aute esse sunt duis sunt ex ex.", options: { 1: "A", 2: "B", 3: "C", 4: "D" }, answer: "C" },
    { id: 9, picture: "http://placehold.it/32x32", category: 5, question: "9Labore aute esse sunt duis sunt ex ex.", options: { 1: "A", 2: "B", 3: "C", 4: "D" }, answer: "D" },
    { id: 10, picture: "http://placehold.it/32x32", category: 5, question: "10Labore aute esse sunt duis sunt ex ex.", options: { 1: "A", 2: "B", 3: "C", 4: "D" }, answer: "B" },
    { id: 11, picture: "http://placehold.it/32x32", category: 5, question: "11Labore aute esse sunt duis sunt ex ex.", options: { 1: "A", 2: "B", 3: "C", 4: "D" }, answer: "C" },
    { id: 12, picture: "http://placehold.it/32x32", category: 5, question: "12Labore aute esse sunt duis sunt ex ex.", options: { 1: "A", 2: "B", 3: "C", 4: "D" }, answer: "D" },
    { id: 13, picture: "http://placehold.it/32x32", category: 5, question: "13Labore aute esse sunt duis sunt ex ex.", options: { 1: "A", 2: "B", 3: "C", 4: "D" }, answer: "A" },
    { id: 14, picture: "http://placehold.it/32x32", category: 5, question: "14Labore aute esse sunt duis sunt ex ex.", options: { 1: "A", 2: "B", 3: "C", 4: "D" }, answer: "A" },
    { id: 15, picture: "http://placehold.it/32x32", category: 5, question: "15Labore aute esse sunt duis sunt ex ex.", options: { 1: "A", 2: "B", 3: "C", 4: "D" }, answer: "C" }
  ]

  var _randomIndex;
  var _answwerPosition = [1, 2, 3, 4];
  var _counter = 0;
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

      $div.text(answerOptions[_answwerPosition[i]]);     //
      for (key in answerOptions) {

        if (currentQuestion.answer == answerOptions[_answwerPosition[i]]) {
          $div.attr("class", "option correct-answer");
        } else {
          $div.attr("class", "option wrong-answer");
        }
      }
      $("#answer-box").append($div);
    }
    
    console.log("on setup current question " + _questionCounter);
    _questionCounter++;
  }

  setUpQuestion(1);

  function resetAll() {
    $("#btnNext").hide();
    _counter = 0;
    $("#answer-box").empty();
    $("#question").empty();
    $(".option").css("background-color", "transparent");
    _answerSelected = false;

  }

  $(".option").on("click", function () {
    _answerSelected = true;
    var id = "#" + this.id;
    if ($(id).hasClass("correct-answer")) {
      $(id).css("background-color", "green");
    } else {
      $(id).css("background-color", "red");
    }
  });

  function showCorrecteAnswer() {
    if (_answerSelected == false) {
      $(".correct-answer").css("background-color", "green");
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
    if (_counter < 10) {
      var $p = $("<p></p>");
      $p.text(_counter);
      _counter++;
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
});
