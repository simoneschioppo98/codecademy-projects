let username= 'simone';


username ? console.log(`Hello ${username}`) : console.log('Hello!');

const userQuestion = 'cagherò domani?';

console.log(`${username} ha chiesto - ${userQuestion}`);

let randomNumber = Math.floor(Math.random()*8);

let eightBall = '';

if (randomNumber === 0){
  eightBall = 'try again';
  console.log(eightBall);
}else if (randomNumber === 1){
  eightBall = 'It is certain';
  console.log(eightBall);
}else if (randomNumber === 2){
  eightBall = 'It is decidedly so';
  console.log(eightBall);
}else if (randomNumber === 3){
  eightBall = 'Reply hazy try again';
  console.log(eightBall);
}else if (randomNumber === 4){
  eightBall = 'Cannot predict now';
  console.log(eightBall);
}else if (randomNumber === 5){
  eightBall = 'Do not count on it';
  console.log(eightBall);
}else if (randomNumber === 6){
  eightBall = 'My sources say no';
  console.log(eightBall);
}else if(randomNumber === 7){
  eightBall = 'Outlook not so good';
  console.log(eightBall);
}else if(randomNumber === 8){
  eightBall = 'Signs point to yes';
  console.log(eightBall);
}
