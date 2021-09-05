//Livetype
  function livetype(){
    var typed1= document.getElementById("couple-1-name-input").value;
    document.getElementById("couple-1-name-output").innerHTML= typed1;
    
    var typed2= document.getElementById("couple-2-name-input").value;
    document.getElementById("couple-2-name-output").innerHTML= typed2;

//Livetype invite message
    var typed3= document.getElementById("invite-message-input").value;
  document.getElementById("invite-message-output").innerHTML= typed3;

//Livetype Slice Initials
    let str1 = document.getElementById('couple-1-name-input').value;
  let str2 = document.getElementById('couple-2-name-input').value;
  document.getElementById('liveslice').innerHTML = str1.slice(0, 1) + ` & ` + str2.slice(0, 1);
  }

//City
  var venueCity = document.getElementById('venue-city-input');

  venueCity.onkeyup = function(){
      document.getElementById('venue-city-output').innerHTML = venueCity.value;
     var vc = document.getElementById('venue-city-input').value;
    document.getElementById('venue-city-output').value = '';
  }

//datepicker live add
  var datetime = document.getElementById('wedding-datetime-input');

datetime.onclick = function(){
    document.getElementById('wedding-datetime-output').innerHTML = datetime.value;
   var wdt = document.getElementById('wedding-datetime-input').value;
  document.getElementById('wedding-datetime-output').value = '';
}

//change Styles
function changeStyle(style) {

  if(style == 'style1') {
    document.getElementById("invite-preview-paper").className = "style1";
  }
  
  if(style == 'style2') {
    document.getElementById("invite-preview-paper").className = "style2";
  }
  
  if(style == 'style3') {
    document.getElementById("invite-preview-paper").className = "style3";
  }

  if(style == 'style4') {
    document.getElementById("invite-preview-paper").className = "style4";
  }
  }
