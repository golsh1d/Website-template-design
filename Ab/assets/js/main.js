function myFunc() {
  var x = document.getElementById("mynav");
  if (x.className === "nav container-fluid") {
    x.className += " responsive";
  } else {
    x.className = "nav container-fluid";
  }
}
