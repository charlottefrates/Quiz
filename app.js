//Page Load Event Listeners
$(document).ready(function () {

     //start page button
     $('button.start-button').on('click',function(event){
          $('#quiz-intro').addClass('hidden');
          $('#quiz-form').removeClass('hidden');
          $('#quiz-status').removeClass('hidden');
          $('#header-content').addClass('hidden');
          $('body').removeClass('backgroundstart');
          $('body').addClass('background');//first background change
          startGame();
     });

     // click next button to move to next question
      moveToNextQuestion ();

      // Click prev button to go back to the last question
     previousQuestion();

     //Progress Bar loading
     runProgressbarforward();
     runProgressbarbackward()


     //Submitting and checking answers
     $(".submit-answer-button").on('click',function() {
          $(this).attr("disabled", true);
          checkAnswer();
          });

     //Submit answers
     $('button.answer-button').on('click',function(event){
          $('#quiz-right').addClass('hidden');
          $('#quiz-wrong').addClass('hidden');
          $('#quiz-form').addClass('hidden');
          $('#quiz-status').addClass('hidden');
          $('#quiz-list').removeClass('hidden');
     });

     //Play Again
     $(".reset-button").click(function() {
          location.reload(true);
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
var curQuestion = 0;
var questionIndex = 0;
var score = 0;


//Starting Game
function startGame() {
     curQuestion++;
     questionIndex = 0;
     score = 0;
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

//Move to Next Questions
function moveToNextQuestion (){
     $(".nextQ").on('click',function() {
          $('input[type=radio]').prop('checked',false); //this clears previously selected answer note!!!! .attr doesnt work anymore use .prop
          $(".submit-answer-button").attr("disabled", false);// turns submit button back on
          event.preventDefault(); //This stops the form from submitting
          $('#quiz-right').addClass('hidden');
          $('#quiz-wrong').addClass('hidden');
          nextQuestion();
          runProgressbarforward();
          changeBackground();
     	});
}


function nextQuestion() {
          curQuestion++;
          questionIndex++;
     	getQuestion();
          $('#currentQ').text(curQuestion);
          $('.totalQ').text(totalQuestions);

	};


//Move to previous questions

function previousQuestion(){
     $('.prevQ').on('click', function(){
          event.preventDefault();
          $(".submit-answer-button").attr("disabled", true);
          curQuestion--;
     	questionIndex--;
     	getQuestion();
          $('#currentQ').text(curQuestion);
          $('.totalQ').text(totalQuestions);
          $('#quiz-right').addClass('hidden');
          $('#quiz-wrong').addClass('hidden');
          runProgressbarbackward()
     })
}

//Progress bar rendering
function runProgressbarforward(){
     var progressbar = $("#progressbar");
     progressbar.css("width", Math.round(100 * curQuestion / totalQuestions + 1) + "%");
};


function runProgressbarbackward(){
     var progressbar = $("#progressbar");
     progressbar.css("width", Math.round(100 * curQuestion / totalQuestions + 1) + "%");
};


//Question Check
function checkAnswer() {
     var answer = $("input[type='radio']:checked").val();
     if (!answer){
          alert('Please select an answer');
                   };
     if (answer == questions[questionIndex].correctAnswer) {
          score++;
          $('#quiz-right').removeClass('hidden');
          $('#quiz-wrong').addClass('hidden');
          console.log("Question " + curQuestion + " was answered correctly");
            ;
        } else {
            $('#quiz-wrong').removeClass('hidden');
             console.log("Question " + curQuestion + " was answered wrong");
               };

     if (questions.length === questionIndex + 1) {
               $('#correctA').text(score);
               $("#quiz-outoro").removeClass("hidden");
              }
	}

//Background style change

function changeBackground(){
     if (curQuestion===2){
          $('body').removeClass('background');
          $('body').addClass('backgroundtwo');
     };
     if (curQuestion===4){
          $('body').removeClass('backgroundtwo');
          $('body').addClass('backgroundthree');
     }
     if (curQuestion===6){
          $('body').removeClass('backgroundthree');
          $('body').addClass('backgroundfour');
     }
     if (curQuestion===8){
          $('body').removeClass('backgroundfour');
          $('body').addClass('backgroundfive');
     }
     if (curQuestion===10){
          $('body').removeClass('backgroundfive');
          $('body').addClass('backgroundsix');
     }
     if (curQuestion===12){
          $('body').removeClass('backgroundsix');
          $('body').addClass('backgroundfinal');
     }
}
