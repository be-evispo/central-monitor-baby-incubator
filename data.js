var sc = 0;
var d1 = 0;
var c1 = 0;
var d2 = 0;
var c2 = 0;
var d3 = 0;
var c3 = 0;
var d4 = 0;
var c4 = 0;

var Client = [];
var Data = [];
var Sskin = [];
var Schamber = [];
var humadity = [];

setInterval(function get_data() {
  var xhr = new XMLHttpRequest();

  xhr.open("GET", "http://192.168.0.106/rest-api/data.json", true);

  xhr.send();
  sc++;
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      $.grep(this.responseText, function (n, i) {});

      var str = this.responseText;

      const obj = JSON.parse(str);

      Client[1] = obj["1"]["client"];
      Data[1] = obj["1"]["Data"];
      Sskin[1] = obj["1"]["Sskin"];
      Schamber[1] = obj["1"]["Schamber"];
      humadity[1] = obj["1"]["humadity"];

      Client[2] = obj["2"]["client"];
      Data[2] = obj["2"]["Data"];
      Sskin[2] = obj["2"]["Sskin"];
      Schamber[2] = obj["2"]["Schamber"];
      humadity[2] = obj["2"]["humadity"];

      Client[3] = obj["3"]["client"];
      Data[3] = obj["3"]["Data"];
      Sskin[3] = obj["3"]["Sskin"];
      Schamber[3] = obj["3"]["Schamber"];
      humadity[3] = obj["3"]["humadity"];

      Client[4] = obj["4"]["client"];
      Data[4] = obj["4"]["Data"];
      Sskin[4] = obj["4"]["Sskin"];
      Schamber[4] = obj["4"]["Schamber"];
      humadity[4] = obj["4"]["humadity"];

      d1 = parseInt(Data[1]);
      d2 = parseInt(Data[2]);
      d3 = parseInt(Data[3]);
      d4 = parseInt(Data[4]);

      if (Client[1] !== null) {
        if (d1 != c1) {
          console.log(Client[1], Data[1], Sskin[1], Schamber[1], humadity[1]);
          c1 = d1;
        }
      }
      
      if (Client[2] !== null) {
        if (d2 != c2) {
          console.log(Client[2], Data[2], Sskin[2], Schamber[2], humadity[2]);
          c2 = d2;
        }
      }

      if (Client[3] !== null) {
        if (d3 != c3) {
          console.log(Client[3], Data[3], Sskin[3], Schamber[3], humadity[3]);
          c3 = d3;
        }
      }

      if (Client[4] !== null) {
        if (d4 != c4) {
          console.log(Client[4], Data[4], Sskin[4], Schamber[4], humadity[4]);
          c4 = d4;
        }
      }

      if (Sskin[1] !== null) {
        document.getElementById("cSskin").innerHTML = Sskin[1];
        document.getElementById("cSchamber").innerHTML = Schamber[1];
        document.getElementById("chumadity").innerHTML = humadity[1];
      }

      if (Sskin[2] !== null) {
        document.getElementById("cSskin2").innerHTML = Sskin[2];
        document.getElementById("cSchamber2").innerHTML = Schamber[2];
        document.getElementById("chumadity2").innerHTML = humadity[2];
      }

      if (Sskin[3] !== null) {
        document.getElementById("cSskin3").innerHTML = Sskin[3];
        document.getElementById("cSchamber3").innerHTML = Schamber[3];
        document.getElementById("chumadity3").innerHTML = humadity[3];
      }

      if (Sskin[4] != null) {
        document.getElementById("cSskin4").innerHTML = Sskin[4];
        document.getElementById("cSchamber4").innerHTML = Schamber[4];
        document.getElementById("chumadity4").innerHTML = humadity[4];
      }
    }
  };
}, 0.1);
