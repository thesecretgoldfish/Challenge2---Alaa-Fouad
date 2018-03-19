function showTime() {
  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();

  var time = h + ":" + m + ":" + s;
  document.getElementById("digitalClock").innerText = time;
  document.getElementById("digitalClock").textContent = time;

  showMessage(h);
}

// run timer
setInterval(showTime,1000);

function showMessage(hours) {
  console.log(hours);

  if (hours > 5 && hours < 12) {
    document.getElementById("greeting").innerText = "morning";
    document.getElementById("greeting").textContent = "morning";
    document.body.style.backgroundImage = "url(martian2.jpg)";
    document.body.style.color = "#D8533E";
  } else if (hours > 12 && hours < 17) {
    document.getElementById("greeting").innerText = "afternoon";
    document.getElementById("greeting").textContent = "afternoon";
    document.body.style.backgroundImage = "url(marsss.jpg)";
    document.body.style.color = "#7C241C";
  } else if (hours > 17 && hours < 21) {
    document.getElementById("greeting").innerText = "evening";
    document.getElementById("greeting").textContent = "evening";
    document.body.style.backgroundImage = "url(martian2.jpg)";
    document.body.style.color = "#D8533E";
  } else {
    document.getElementById("greeting").innerText = "night";
    document.getElementById("greeting").textContent = "night";
    document.body.style.backgroundImage = "url(marsss.jpg)";
    document.body.style.color = "#7C241C";
  }
}
//animeer de greetings
//animate the motherfucking clock
function showDatum() {
  var datum = new Date();
  var dagen = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
  document.getElementById("dag").innerHTML = dagen[datum.getDay()];

  var dagMaand = datum.getDate();
  var maand = datum.getMonth() + 1;
  var jaar = datum.getFullYear();

  var Datum = dagMaand + "/" + maand + "/" + jaar;
  document.getElementById("datum").innerHTML = Datum;
}
showDatum();

//Hieronder Tweenmax
TweenMax.to("#datum", 6, {color:"#ace7ef"});
TweenMax.staggerFrom("#message", 0.5, {y: 250, ease:Power1.easeOut}, 0.1);
TweenMax.staggerFrom("#dagDatum", 0.5, {y: -250, ease:Power1.easeOut}, 0.1);
TweenMax.staggerFrom("#main", 2, {x: -150, ease:Power1.easeOut}, 0.1);
TweenMax.staggerFrom("#digitalClock", 3, {x: 150, ease:Power1.easeOut}, 0.1);
