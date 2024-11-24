// const variables
const handleSec = document.querySelector('.sec');
const handleMin = document.querySelector('.min');
const handleHour = document.querySelector('.hour');

// use date function to extract sec, min, and hour 
 function setDate() {
  const now = new Date();

//   extracting seconds 
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  handleSec.style.transform = `rotate(${secondsDegrees}deg)`;

  //   extracting min
  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
  handleMin.style.transform = `rotate(${minsDegrees}deg)`;

  //   extracting hour
  const hour = now.getHours();
  const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
  handleHour.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);

setDate();
