
var question = document.getElementById('question');
var answerA = document.getElementById('a');
var answerB = document.getElementById('b');
var answerC = document.getElementById('c');
var answerD = document.getElementById('d');
var inner_bar = document.getElementById('inner-bar') ;
//ar userAns = document.getElementsByClassName('ans'); 

var next = document.getElementById('next');
var submit = document.getElementById('submit');

submit.style.opacity = 0;
inner_bar.style.width = "33%";
//p.innerHTML = "hi";
var maxques = 3;
//question.innerHTML = "hey how are you";

const myQuestions = [
    {
      question: "Who invented JavaScript?",
      answers: {
        a: "Douglas Crockford",
        b: "Sheryl Sandberg",
        c: "Brendan Eich",
        d: "Shein Dakota"
      },
      correctAnswer: "c"
    },
    {
      question: "Which one of these is a JavaScript package manager?",
      answers: {
        a: "Node.js",
        b: "TypeScript",
        c: "npm",
        d: "cd"
      },
      correctAnswer: "c"
    },
    {
      question: "Which tool can you use to ensure code quality?",
      answers: {
        a: "Angular",
        b: "jQuery",
        c: "RequireJS",
        d: "ESLint"
      },
      correctAnswer: "d"
    }
  ];
  //question.innerHTML = myQuestions[0]["question"];
 

// answerA.addEventListener('click',function (){
//   answerA.innerHTML = "You clicked";
// })
var ques = 0;
var score = 0;

function displayQuiz(ques){
  // submit.style.opacity = 0;
  // next.style.opacity = 1;
  answerA.style.backgroundColor = "oldlace";
  answerB.style.backgroundColor = "oldlace";
  answerC.style.backgroundColor = "oldlace";
  answerD.style.backgroundColor = "oldlace";
  
  answerA.style.color = "black"
  answerB.style.color = "black"
  answerC.style.color = "black"
  answerD.style.color = "black"

  question.innerHTML = myQuestions[ques]["question"];
  answerA.innerHTML = myQuestions[ques]["answers"]["a"];
  answerB.innerHTML = myQuestions[ques]["answers"]["b"];
  answerC.innerHTML = myQuestions[ques]["answers"]["c"];
  answerD.innerHTML = myQuestions[ques]["answers"]["d"];


}

displayQuiz(ques);
function checkAnswers(value){
  if(value===myQuestions[0]['correctAnswer']){
    score++;
    return true;
  }
  return false;
}

answerA.addEventListener('click',function(){
 // answerA.style.backgroundColor = "yellow";
 // answerA.innerHTML = "You clicked";
  if(checkAnswers("a")){
    answerA.style.color = "white";
    answerA.style.backgroundColor = "green";
  }else{
    answerA.style.color = "white";
    answerA.style.backgroundColor = "red";
  }
  answerA.style.color = "white";
});

answerB.addEventListener('click',function(){
  // answerA.style.backgroundColor = "yellow";
  // answerA.innerHTML = "You clicked";
   if(checkAnswers("b")){
     answerB.style.color = "white";
     answerB.style.backgroundColor = "green";
   }else{
     answerB.style.color = "white";
     answerB.style.backgroundColor = "red";
   }
   answerB.style.color = "white";
 });

 answerC.addEventListener('click',function(){
  // answerA.style.backgroundColor = "yellow";
  // answerA.innerHTML = "You clicked";
   if(checkAnswers("c")){
     answerC.style.color = "white";
     answerC.style.backgroundColor = "green";
   }else{
     answerC.style.color = "white";
     answerC.style.backgroundColor = "red";
   }
   answerC.style.color = "white";
 });

 answerD.addEventListener('click',function(){
  // answerA.style.backgroundColor = "yellow";
  // answerA.innerHTML = "You clicked";
   if(checkAnswers("d")){
     answerD.style.color = "white";
     answerD.style.backgroundColor = "green";
   }else{
     answerD.style.color = "white";
     answerD.style.backgroundColor = "red";
   }
   answerD.style.color = "white";
 });

 function nextFunction(){
    //alert("Hey you clicked next");
    ques++;
    
    if(ques===1){
      inner_bar.style.width = "66%"
    }
    if(ques===2){
      inner_bar.style.width = "99%"
    }

    if(ques < maxques){
      displayQuiz(ques);
    }

    if(ques === (maxques-1)){
      next.style.cursor = "context-menu";
      next.style.opacity = 0;
      submit.style.opacity = 1;
      submit.style.cursor = "pointer";
      //addSubmit();
      //next.removeEventListener('click');
    }    
    //if()
  

}
 

next.addEventListener('click',nextFunction);
submit.addEventListener('click',submitFun);

function addSubmit(){
 ques = 0;
}


function submitFun(){
  alert('You scored ' + (score*10) + " in the quiz.\n" + "Press the button to restart.");
 // ques = 0;
 // score = 20;
  //submit.removeEventListener('click');
  submit.style.opacity = 0;
  submit.style.cursor = "context-menu";
  next.style.opacity = 1;
  next.style.cursor = "pointer";
  score = 0;
  ques = 0;
  inner_bar.style.width = "33%";
  displayQuiz(ques);
}


userAns.addEventListener('click',function(){
     var value = this.getAttribute('data-value');
     if(checkAnswers(value)){
       userAns.style.backgroundColor = "green";
     }
});