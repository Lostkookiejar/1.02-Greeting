console.log('Hello!');

function greetUser(){
  const promptName = prompt("Enter your name");
  const promptMood = prompt("Enter your mood");

  alert(`Hello ${promptName}! You look ${promptMood} today!`);
}