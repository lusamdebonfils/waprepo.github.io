window.onload = function(){

  document.getElementById('start').onclick=startAnimation;
  document.getElementById('stop').onclick=stopAnimation;
  document.getElementById('fontsize').onchange=increasingFont;
  document.getElementById('turbo').onchange=increasingFont;

}

function startAnimation(){
  let animationChoice = document.getElementById('animation').value;
  let currentAnimation = document.getElementById('text-area');
  let animationTypeFrames = ANIMATIONS[animationChoice].split('=====\n');
  setInterval(changingSpeedPerFrame(animationTypeFrames,250),10);

}

function changingSpeedPerFrame(animationType,speed){
  return function(){
    for(let frame of animationType){
      timer = setInterval(function(){
        document.getElementById('text-area').value = frame;
      },speed);
    }
  }
}

function stopAnimation(){
  clearInterval(timer);
}

function increasingFont(textSize){
  let txtSize = document.getElementById('text-area').style.fontSize = textSize + 'px';
}

function tubroCharge(){

}
