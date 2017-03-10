//Page Load Event Listeners
$(document).ready(function () {

     //start page button --> hides quiz-intro and starts quiz-form
     $('button.start-button').on('click',function(event){
          $('#quiz-intro').addClass('hidden');
          $('#quiz-form').removeClass('hidden');
          $('#quiz-status').removeClass('hidden');
          startGame();
     });

     // click next button to move to next question
     moveToNextQuestion ();


});

//state
var questions = [
                    {
                         qnumber:1,
                         quest:"'In Nausicaa of the Valley of the Wind,' what threatens the existence of humans?",
                         answers:[ 'Nausicaa','Erosion','The toxic jungle','The dragons' ],
                         correctAnswer:3,
                    },
                    {
                         qnumber:2,
                         quest:"How do Mei, Satsuki and their father make the sootballs leave in 'My Neighbor Totoro'?",
                         answers:[ 'Crying','Screaming','Laughing','Jumping'],
                         correctAnswer:2,
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
var currentQuestion = 0;
var questionIndex = 0;
var score = 0;


//Starting Game
function startGame() {
     curQuestion = 1;
	score = 0;
	questionIndex = 0;
	getQuestion();
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
     	});
}

function nextQuestion() {
	curQuestion++;
	questionIndex++;
	getQuestion();
     $('#currentQ').text(curQuestion);
	};



/*

THE FOLLOWING CODE IS STILL IN PROGRESS TO

-I NEED TO START LOOKING INTO HOW TO GET THE PROGRESS BAR TO WORK BASED ON PROGRESS.

-CREATE LOGICAL ARGUMENTS FOR RIGHT AND WRONG ANSWERS
     I WANT THERE TO BE 1)A POP UP WINDOW STATING IF ANSWER IF RIGHT WITH AN IMGAGE (HAPPY MAIN CHARACTERS) FROM FILMS
                        2) ANOTHER WINDOW WITH A SCARY IMAGE (MONSTERS) FROM THE FILM IF THE ANSWERS ARE WRONG
     THERE ALSO MUST BE A CLOSE WINDOW BUTTON (MAKE .hidden) TO GO BACK TO THE QUIZ


//Check Answer function
function checkAnswer() {
     var radioValue = false;
     var userChoice = document.getElementsByName("radio"); ---> Look up jquery syntax for this
          for (var i = 0; i < userChoice.length; i++) {
          	if(userChoice[i].checked) {
          		radioValue = userChoice[i].value;
          		}
          };

     };

// If correct
     var resultClass;
     if (radioValue === questions.questions.answer) {
          score++;
          ---- bring correct answer container up. remove hidden class. add correct z index----
     }
// If wrong
      else {
          ---- bring correct wrong container up. remove hidden class. add correct z index----
     } ;

//Check Answer
$(".submit-answer-button").click(,function() {
     checkAnswer();
     });



//Check that user selected a choice
if (radioValue === false) {
     alert("Please select an answer");
     return;
     };


*/
