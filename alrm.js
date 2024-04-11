var i = 0;
var Sec = 0;
var Min = 0;

var c1 = 51.0;
var c2 = 50.0;
var c3 = 50.0;
var c4 = 50.0;

var mi1 = 0.0;
var ma1 = 0.0;
var mi2 = 0.0;
var ma2 = 0.0;
var mi3 = 0.0;
var ma3 = 0.0;
var mi4 = 0.0;
var ma4 = 0.0;

var Start = 0;
var n = 1;
var r = 1;

function Ssuhu1(b, start) {
  if ((n = 1)) {
    Start = start;
    c1 = parseFloat(b);
    ma1 = c1 + 1;
    mi1 = c1 - 1;
    console.log(ma1);
    console.log(mi1);
    i = 0;
    n = 0;
  }
}

function Ssuhu2(c, start) {
  if ((n = 1)) {
    Start = start;
    c2 = parseFloat(c);
    mi2 = c2 - 1;
    ma2 = c2 + 1;
    i = 0;
    n = 0;
  }
}

function Ssuhu3(d, start) {
  if ((n = 1)) {
    Start = start;
    c3 = parseFloat(d);
    mi3 = c3 - 1;
    ma3 = c3 + 1;
    i = 0;
    n = 0;
  }
}

function Ssuhu4(e, start) {
  if ((n = 1)) {
    Start = start;
    c4 = parseFloat(e);
    mi4 = c4 - 1;
    ma4 = c4 + 1;
    i = 0;
    n = 0;
  }
  //document.getElementById("datacount").innerHTML = ip;
}

function openNav() {
  document.getElementById("mySidebar").style.width = "260px";
  document.getElementById("main").style.marginLeft = "0px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

setInterval(function () {
  var C1 = parseFloat(document.getElementById("cSchamber").innerHTML);
  var C2 = parseFloat(document.getElementById("cSchamber2").innerHTML);
  var C3 = parseFloat(document.getElementById("cSchamber3").innerHTML);
  var C4 = parseFloat(document.getElementById("cSchamber4").innerHTML);

  const box = document.getElementById("ch");
  const box2 = document.getElementById("ch2");
  const box3 = document.getElementById("ch3");
  const box4 = document.getElementById("ch4");

  //document.getElementById("datacount").innerHTML = ma1;
  //document.getElementById("datacountt").innerHTML = mi1;
  if (C1 > ma1 || C1 < mi1) {
    //div.style.color = "#008000";
    //console.log(c1);
    box.style.backgroundColor = "#FF0000";
  }
  if (C1 >= mi1 && C1 <= ma1) {
    //console.log(C1);
    //div.style.color = "#008000";
    box.style.backgroundColor = "#16181d";
  }
  if (C2 > ma2 || C2 < mi2) {
    //div.style.color = "#008000";
    box2.style.backgroundColor = "#FF0000";
  }
  if (C2 >= mi2 && C2 <= ma2) {
    //div.style.color = "#008000";
    box2.style.backgroundColor = "#16181d";
  }
  if (C3 > ma3 || C3 < mi3) {
    //div.style.color = "#008000";
    box3.style.backgroundColor = "#FF0000";
  }
  if (C3 >= mi3 && C3 <= ma3) {
    //div.style.color = "#008000";
    box3.style.backgroundColor = "#16181d";
  }
  if (C4 > ma4 || C4 < mi4) {
    //div.style.color = "#008000";
    box4.style.backgroundColor = "#FF0000";
  }
  if (C4 >= mi4 && C4 <= ma4) {
    //div.style.color = "#008000";
    box4.style.backgroundColor = "#16181d";
  }
}, 500);
