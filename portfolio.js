//Answer to the Question

const pickAnswer = () => {
    let ranNum = Math.floor(Math.random()*3)
    switch(ranNum){
        case 0:
          return 'Absolutely!';
          break;
        case 1:
          return 'Yes!';
          break;
        case 2:
          return 'For Sure!';
          break;
      }
    }

    //Setting the variables for the button and answer
let answer = document.getElementById('answer');
// This is the click me for answer button
let button = document.getElementById('button');


//Setting answer = to pickAnswer
button.onclick = function(){
  answer.innerHTML = pickAnswer();
}


