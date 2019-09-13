window.onload = function(){

  document.getElementById('start').onclick=startAnimation;
  document.getElementById('stop').onclick=stopAnimation;
  document.getElementById('fontsize').onchange=increasingFont;
  document.getElementById('turbo').onchange=tubroCharge;

}

function startAnimation(){
  let animationChoice = document.getElementById('animation').value;
  let currentAnimation = document.getElementById('text-area');
  let animationTypeFrames = ANIMATIONS[animationChoice].split('=====\n');
  setInterval(changingSpeedPerFrame(animationTypeFrames,250),((animationTypeFrames.length * 250)+10));

}

function changingSpeedPerFrame(animationType,speed){
  return function(){
    for(let frame of animationType){
      timer = setTimeout(function(){
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
  setInterval(changingSpeedPerFrame(animationTypeFrames,50),((animationTypeFrames.length * 50)+0));
}
