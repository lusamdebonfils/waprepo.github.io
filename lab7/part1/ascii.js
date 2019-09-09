window.onload = function(){

  document.getElementById('start').onclick=startAnimation;
  document.getElementById('stop').onclick=stopAnimation;
  document.getElementById('fontsize').onclick=increasingFont;

}

function startAnimation(){
  let animationChoice = document.getElementById('animation').value;
  let currentAnimation = document.getElementById('text-area');
  let animationTypeFrames = ANIMATIONS[animationChoice].split('=====\n');
  setInterval(changingSpeedPerFrame(animationTypeFrames,5000),250);

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

}

function increasingFont(textSize){
  document.getElementById('text-area').style.fontSize = textSize + 'px';
}

function tubroCharge(){

}
