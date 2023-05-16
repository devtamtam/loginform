function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username == "" || password == "") {
      alert("Please enter both username and password");
    } 
    else if(username == "tamtam" && password == "qwerty"){
        alert("welcome back! Mr/Ms " + username);
        window.location.href = "vault.html";
    }
    else {
      alert("invalid username or password");
    }
  }

  function togglePassword() {
    var passwordField = document.getElementById("password");
    var toggleButton = document.getElementsByTagName("button")[0];

    if (passwordField.type === "password") {
      passwordField.type = "text";
      toggleButton.textContent = "Hide";
    } else {
      passwordField.type = "password";
      toggleButton.textContent = "Show";
    }
  }