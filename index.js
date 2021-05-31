var readlineSync = require('readline-sync');
var name = readlineSync.question("May I have your name?");
console.log("Hey "+ name+". Welcome to DO YOU KNOW SHIKHA?");

var questionList = [
  {
    question : "What's my name? ",
    answer : "shikha kumari"
  },
  {
    question : "Where do i live? ",
    answer : "bangalore"
  },
  {
    question : "Where do i work? ",
    answer : "gyansys"
  },
  {
    question : "What's my designation? ",
    answer : "associate consultant"
  }
];
var score=0;
for(var i=0; i<questionList.length; i++){
  var question = questionList[i].question;
  var answer = questionList[i].answer;
  score = play(question, answer);
  console.log("Your current score is = "+score);
  console.log();
}
function play(question, answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer.toLowerCase() === answer)
  {
    score++;
  }
  else{
    score--;
  }
  return score;
}
