const cards = document.querySelectorAll('.memory-card');
let flippedCard = false;
let firstCard, secondCard;
let lockCard = false;

function flipCard() {
    if (lockCard) return;
    if(this === firstCard) return;
    this.classList.add('flip');
        if(!flippedCard) {
            flippedCard = true;
            firstCard = this;
            
        } else {
            secondCard = this;
            if(firstCard.dataset.pic === secondCard.dataset.pic){
                firstCard.removeEventListener('click', flipCard);
                secondCard.removeEventListener('click', flipCard);
                reset();
            } else {
                lockCard = true;
                setTimeout(() => {
                firstCard.classList.remove('flip');
                secondCard.classList.remove('flip');
                reset();
            }, 1000);
        }
    }
}
function reset (){
    [flippedCard, lockCard] = [false, false];
    [firstCard, secondCard] = [null, null];
};

// document.getElementById('button').addEventListener('click', newGame);
// function newGame(){
//     document.querySelectorAll('.memory-card').classList.remove('flip');
// };

let x = document.querySelectorAll('.memory-card');
function newGame(){
    x.forEach(card => {
        card.classList.remove('flip')
        cards.forEach(card => card.addEventListener('click', flipCard));
    })
    setTimeout(() => {
        mixingTheCards()        
    }, 300);
}


function mixingTheCards(){
    cards.forEach(card => {
        let randomPosition = Math.floor(Math.random() * 10);
        card.style.order = randomPosition;
    })
};
cards.forEach(card => card.addEventListener('click', flipCard));

let upgradeTime = 1;
let seconds = upgradeTime;

function start() {
  let days        = Math.floor(seconds/24/60/60);
  let hoursLeft  = Math.floor((seconds) - (days*86400));
  let hours      = Math.floor(hoursLeft/3600);
  let minutesLeft = Math.floor((hoursLeft) - (hours*3600));
  let minutes    = Math.floor(minutesLeft/60);
  let remainingSeconds = seconds % 60;
  
  function pad(n) {
    return (n < 10 ? "0" + n : n);
   
  }
  
  document.getElementById('countdown').textContent =pad(minutes) + ":" + pad(remainingSeconds);  //pad(hours) + ":" + 
  if (seconds == 0) {
    clearInterval(countdownTimer);
    document.getElementById('countdown').innerHTML = "Completed";
  } else {
    seconds++;
  }
};