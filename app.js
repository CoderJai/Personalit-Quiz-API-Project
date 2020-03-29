function show() {
  var input = document.getElementById("user").value;
  var imgSrc = document.getElementById("avatar");
  imgSrc.setAttribute("src", "https://joeschmoe.io/api/v1/" + input + "");
}
