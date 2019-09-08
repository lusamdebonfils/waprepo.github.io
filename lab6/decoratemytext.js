

window.onload = function(){
  document.getElementById('button1').onclick = timedEnlarging;
  document.getElementById('bling1').onchange  = onChange;
  //setting fontSize
  document.getElementById('txtarea').style.fontSize = '20px';

  // console.log(blingCheck);
  // blingCheck == false ? onChange:nothingChanged;

};
function timedEnlarging(){
  //let timer = null;
  setInterval(enlargeText,500);
}
function enlargeText(){
  let txtSize = parseInt(document.getElementById('txtarea').style.fontSize);
  console.log('before : '+txtSize);
  txtSize += 2;
  document.getElementById('txtarea').style.fontSize = txtSize +'px';
  console.log('final : '+txtSize);

}

function onChange(){
    // alert('Not Checked');
    let bling = document.getElementById('bling1');
    let txtArea = document.getElementById('txtarea');
    if(bling.checked === true){
      //alert('Checked');
      txtArea.style.fontWeight = 'bold';
      txtArea.style.color = 'green';
      txtArea.style.textDecoration = 'underline';
      document.body.style.backgroundImage = "url('http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg')";
    }else{
      //alert('Not Checked');
        txtArea.style.fontWeight = 'normal';
        txtArea.style.color = 'black';
        txtArea.style.textDecoration = 'none';
        document.body.style.backgroundImage = 'none';
    }
}
