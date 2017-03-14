//Page Load Event Listeners
$(document).ready(function () {

     //start page button
     $('button.start-button').on('click',function(event){
          $('#quiz-intro').addClass('hidden');
          $('#quiz-form').removeClass('hidden');
          $('#quiz-status').removeClass('hidden');
          startGame();
     });

     // click next button to move to next question
      moveToNextQuestion ();

     //Progress Bar loading
     runProgressbarforward();
     runProgressbarbackward()

     // Click prev button to go back to the last question
     previousQuestion();

     //Submitting and checking answers
     $(".submit-answer-button").on('click',function() {
          checkAnswer();
          });

     //See answers
     $('button.answer-button').on('click',function(event){
          $('#quiz-right').addClass('hidden');
          $('#quiz-wrong').addClass('hidden');
          $('#quiz-form').addClass('hidden');
          $('#quiz-status').addClass('hidden');
          $('#quiz-list').removeClass('hidden');
     });

     //Play Again
     $('.reset-button').on('click',function(){
          event.preventDefault();
          $('#quiz-status').removeClass('hidden');
          $('#quiz-form').removeClass('hidden');
          $('#quiz-outoro').addClass ('hidden');
          $('#quiz-list').addClass('hidden');
          $('#quiz-right').addClass('hidden');
          $('#quiz-wrong').addClass('hidden');
          startGame();
          nextQuestion();
     });

});



//state
var questions = [
                    {
                         qnumber:1,
                         quest:"'In Nausicaa of the Valley of the Wind,' what threatens the existence of humans?",
                         answers:[ 'Nausicaa','Erosion','The toxic jungle','The dragons' ],
                         correctAnswer:2,
                    },
                    {
                         qnumber:2,
                         quest:"How do Mei, Satsuki and their father make the sootballs leave in 'My Neighbor Totoro'?",
                         answers:[ 'Crying','Screaming','Laughing','Jumping'],
                         correctAnswer:1,
                    },
                    {
                         qnumber:3,
                         quest:"What animal do Chirhiro's parents both get turned into in 'Spirited Away'?",
                         answers:['Pig','Hedgehog','Bunny','Monkey' ],
                         correctAnswer:0,
                    },
                    {
                         qnumber:4,
                         quest:"What is Kiki's cat named in 'Kiki's Delivery Service'?",
                         answers:[ 'Joe','Gigo','Jay','Jiji'],
                         correctAnswer:3,
                    },
                    {
                         qnumber:5,
                         quest:"What natural disaster happened during 'Ponyo on the Cliff by the Sea'?",
                         answers:['Earthquake','Tornado','Tsunami','Mudslide'],
                         correctAnswer:2,
                    },
                    {
                         qnumber:6,
                         quest:"What were the pirates trying to steal from Sheeta in 'Laputa: Castle in the Sky'?",
                         answers:['Necklace','Bracelet','Earings','Ring'],
                         correctAnswer:0,
                    },
                    {
                         qnumber:7,
                         quest:"Where was Ashitaka's infection spreading from in 'Princess Mononoke'?",
                         answers:['His leg','His head','His chest','His arm'],
                         correctAnswer:3,
                    },
                    {
                         qnumber:8,
                         quest:"What color did Nausicaa's dress change in 'Nausicaa of the Valley of the Wind'?",
                         answers:['Pink','Red','Blue','Purple'],
                         correctAnswer:2,
                    },
                    {
                         qnumber:9,
                         quest:"What does Arietty use to hold her hair back in 'The Secret World of Arietty'?",
                         answers:['Rubber Band','Clothespin','Ring','Tape'],
                         correctAnswer:1,
                    },
                    {
                         qnumber:10,
                         quest:"What is the flaming creature's name in 'Howl's Moving Castle?'",
                         answers:[ 'Crucifer','Calcifer','Calculator','Calcium' ],
                         correctAnswer:1,
                    },
                    {
                        qnumber:11,
                        quest:"In The Wind Rises, why can't Jiro become a pilot?",
                        answers:[ 'He is blind','He doesn\'t know how to drive one','He doesn\'t have enough money to go to college','He is nearsighted'],
                        correctAnswer:3,
                   },
                   {
                        qnumber:12,
                        quest:'Which character from Tales of Earthsea says, "Life without death is not life."',
                        answers:[ 'Haitaka','Teru','Sparrowhawk','Hare' ],
                        correctAnswer:0,
                   }
               ];

//Global Variables
var totalQuestions = questions.length;
var currentQuestion = 0;
var questionIndex = 0;
var score = 0;


//Starting Game
function startGame() {
     curQuestion = 1;
	score = 0;
	questionIndex = 0;
	getQuestion();
     console.log("The game has begun.")
 	};

//Get Question
function getQuestion() {
     $("#questions").text(questions[questionIndex].quest);
	$("#choice1").text(questions[questionIndex].answers[0]);
	$("#choice2").text(questions[questionIndex].answers[1]);
	$("#choice3").text(questions[questionIndex].answers[2]);
	$("#choice4").text(questions[questionIndex].answers[3]);
 	};

//Move to Next Question
function moveToNextQuestion (){
     $(".nextQ").on('click',function() {
     	nextQuestion();
     	$('input:radio[name=radio]').attr('checked',false);
          $('#quiz-right').addClass('hidden');
          $('#quiz-wrong').addClass('hidden');
     	});
}


function nextQuestion() {
	curQuestion++;
	questionIndex++;
	getQuestion();
     $('#currentQ').text(curQuestion);
     $('.totalQ').text(totalQuestions);
	};


//Move to previous question

function previousQuestion(){
     $('.prevQ').on('click', function(){
          curQuestion--;
     	questionIndex--;
     	getQuestion();
          $('#currentQ').text(curQuestion);
          $('.totalQ').text(totalQuestions);
          $('#quiz-right').addClass('hidden');
          $('#quiz-wrong').addClass('hidden');
     })
}

//Progress bar rendering
function runProgressbarforward(){
     var totalQuestions = 11;
     var currentQuestion = 0;
     var progressbar = $("#progressbar");

$(".nextQ").on("click", function(){
  if (currentQuestion >= totalQuestions){ return; }
  currentQuestion++;
  progressbar.css("width", Math.round(100 * currentQuestion / totalQuestions) + "%");
});
}

function runProgressbarbackward(){
     var totalQuestions = 11;
     var currentQuestion = 0;
     var progressbar = $("#progressbar");

$(".prevQ").on("click", function(){
  if (currentQuestion >= totalQuestions){ return; }
  currentQuestion--;
  progressbar.css("width", Math.round(100 * currentQuestion / totalQuestions) + "%");
});
}

//Question Check
function checkAnswer() {
     var radioValue = false;
     var userChoice = $(':radio'); //$("input:radio:checked").val();
     for (var i = 0; i < userChoice.length; i++) {
          if(userChoice[i].checked) {
               radioValue = userChoice[i].checked;
               console.log("The index value chosen is: " + radioValue);
          }
     } //NOT DETECTING MY SELECTED RADIO BUTTON!!


     //Check that user selected a choice
     if (radioValue === false) {
          alert("Please select an answer");
          return;
     }

     // If correct  **** NOT WORKING***
     if (radioValue === questions[questionIndex].correctAnswer) {
          score++;
          console.log("Question " + curQuestion + " was answered correctly");
          $('#quiz-right').removeClass('hidden');
     // If wrong
     } else {
          console.log("Question " + curQuestion + " was answered wrong");
          $('#quiz-wrong').removeClass('hidden');
     }

     if (questions.length === questionIndex + 1) {
               $('#correctA').text(score);
			$("#quiz-outoro").removeClass("hidden");
		}
	}


/*

THE FOLLOWING CODE IS STILL IN PROGRESS TO

-I NEED TO START LOOKING INTO HOW TO GET THE PROGRESS BAR TO WORK BASED ON current question status.

-BUILD UPON LOGICAL ARGUMENTS FOR RIGHT AND WRONG ANSWERS

*/
