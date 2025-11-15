/*let form = document.querySelector("form");
 let input = document.querySelectorAll("input");
 let main = document.querySelector("#main");



form.addEventListener("submit", function(dets){
    
    dets.preventDefault();

    let card = document.createElement("div");
    card.classList.add("card");

    let profile = document.createElement("div");
    profile.classList.add("profile");


    card.appendChild(profile);
    console.log(card);


    let img = document.createElement("img");
    img.setAttribute("src", input[0].value);

    let h3 = document.createElement("h3");
    h3.textContent = input[1].value;
    let h5 = document.createElement("h5");
    h5.textContent = input[2].value;
    let p = document.createElement("p");
    p.textContent = input[3].value;

  profile.appendChild(img);
  card.appendChild(profile);

  card.appendChild(h3);
  card.appendChild(h5);
  card.appendChild(p);


 main.appendChild(card);


  inputs.forEach(function(inp){
    if(inp.tyype !== "submit"){
    inp.vale = "";
    }
  })
 });*/



/*let abcd = document.querySelector("#abcd");

abcd.addEventListener("mouseover", function(){
    abcd.style.backgroundColor = "yellow";
});

abcd.addEventListener("mouseout", function(){
    abcd.style.backgroundColor = "red";
});*/



/*let abcd = document.querySelector("#abcd");

window.addEventListener("mousemove", function(dets){

abcd.style.top = dets.clientY + "px";   // y axiske liye top kaam krta h kyoki top to buttom jate h yaxix m 
abcd.style.left = dets.clientX + "px";  // x axis ke liye left to right kaam krta h kyoki left to right jaate h 

});*/

/*window.addEventListener("keydown", function(){

  console.log("key pressed:",event.key );
});*/



/*let abcd = document.querySelector("#abcd");

abcd.addEventListener("click", function(dets){

console.log(dets);
});*/


/*let form = document.querySelector("form");

form.addEventListener("submit", function(dets){

  dets.preventDefault();
});*/



/*document.querySelector("#nav")
.addEventListener("click", function(){
   alert("clicked");

});*/


/*let ul = document.querySelector("ul");

ul.addEventListener("click", function(dets){

  dets.target.classList.toggle("lt");

});*/

/*let inp = document.querySelector("input");

inp.addEventListener("input", function(){



});*/

/*let nm = document.querySelector("#name");
let form = document.querySelector("form");

form.addEventListener("submit", function(dets) {
  dets.preventDefault();

  const re = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  let ans = re.test("kajalchauhan892079@gmail.com");  // <-- use re instead of regex

  console.log(ans);


 /*dets.preventDefault();
if (nm.value.lenght <= 2){
  document.querySelector("#hide").style.display = "initial";
}
else{
  document.querySelector("#hide").style.display = "none";
}

});*/




//  note:ye neeche mne html ka code likh diya h //
/*<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Email & Password Validator</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
    <h2>Email & Password Validator</h2>
    <form id="form">
      <div class="input-group">
        <label for="email">Email</label>
        <input type="text" id="email" placeholder="Enter your email">
        <small id="email-error"></small>
      </div>

      <div class="input-group">
        <label for="password">Password</label>
        <input type="password" id="password" placeholder="Enter your password">
        <small id="password-error"></small>
      </div>

      <button type="submit">Validate</button>
    </form>
  </div>

  <script src="script.js"></script>
</body>
</html>*/


/*let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("#form");

form.addEventListener("submit", function(dets){
  dets.preventDefault();

  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  let emailans = emailRegex.test(email.value);
  let passwrdans = passwordRegex.test(password.value);

  if(!emailans){
    document.querySelector("#email-error").textContent = "Email is incorrect";
  } else {
    document.querySelector("#email-error").textContent = "";
  }

  if(!passwrdans){
    document.querySelector("#password-error").textContent = "Password is incorrect";
  } else {
    document.querySelector("#password-error").textContent = "";
  }
});*/


 /*let lm = setInterval(function(){

    console.log("Hello");
}, 5000);

clearInterval(lm); */






















