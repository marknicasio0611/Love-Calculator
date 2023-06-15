function calculateLove() {
    var name1 = document.getElementById("name1").value.trim();
    var name2 = document.getElementById("name2").value.trim();
  
    if (name1 === "" || name2 === "") {
      document.getElementById("result-section").innerHTML = "<h2>Error</h2><p>Please enter both names.</p>";
      return;
    }
  
    var lovePercentage = Math.floor(Math.random() * 101);
    var result = "<h2>Love Compatibility</h2><p>" + name1 + " and " + name2 + "</p><p>Your love percentage is: " + lovePercentage + "%</p>";
  
    if (lovePercentage < 30) {
      result += "<p>Isipin mo yun Tiger</p>";
    } else if (lovePercentage < 50) {
      result += "<p>Wag ka na umasa, idol</p>";
    } else if (lovePercentage < 70) {
      result += "<p>Go go go aydol</p>";
    } else {
      result += "<p>Sya ang baby baybu ng buhay mo!</p>";
    }
  
    document.getElementById("result-section").innerHTML = result;
  }