function getRandom{
  function getRandomInt(1000, 2500) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

document.getElementById("randomNo");
randomNo = getRandom();

document.append(randomNo);

//Reference https://css-tricks.com/generate-a-random-number/ to remind me about <div>
