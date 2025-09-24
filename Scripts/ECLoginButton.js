var wrongCounter = 0;
  function LoginButton() {
    var user = document.getElementById("user");
    var pass = document.getElementById("pass");
    var wrongMsg = document.getElementById("WrongMsg");

    if (user.value == "1967EthicsCommittee" && pass.value != "") {
      location.href =
        "https://sites.google.com/view/bksntheethicscommitteehomepage/home";
    } else {
      wrongCounter = wrongCounter + 1;
      wrongMsg.style.visibility = "visible";
      user.value = ""
      pass.value = ""
    }
  }


