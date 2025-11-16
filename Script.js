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



let users = [
  {
    name: "amisha rathore",
    pic: "https://i.pinimg.com/736x/cd/9b/1c/cd9b1cf5b96e8300751f952488d6c002.jpg",
    bio: "silent chaos in a loud world 🌑🖤 | not for everyone",
  },
  {
    name: "amita mehta",
    pic: "https://i.pinimg.com/736x/1f/2f/85/1f2f856bf3a020ed8ee9ecb3306ae074.jpg",
    bio: "main character energy 🎬 | coffee > everything ☕✨",
  },
  {
    name: "isha oberoi",
    pic: "https://i.pinimg.com/736x/23/48/7e/23487ef1268cfe017047a0640318c0d0.jpg",
    bio: "walking through dreams in doc martens 💭🖤 | late night thinker",
  },
  {
    name: "Ojin Oklawa",
    pic: "https://i.pinimg.com/736x/01/be/94/01be94b0b5bf03a50b5d6c4bfec78063.jpg",
    bio: "too glam to give a damn 💅 | filter free soul",
  },
  {
    name: "diya bansal",
    pic: "https://i.pinimg.com/736x/74/b0/67/74b067e6c5ece09d99f68c42c5f6754e.jpg",
    bio: "a little chaos, a lot of art 🎨✨ | just vibes",
  },
  {
    name: "tanay rawat",
    pic: "https://i.pinimg.com/736x/9b/78/b9/9b78b95425278ee37e88869b8c5fb2c6.jpg",
    bio: "don’t text, just vibe 🪩 | soft heart, sharp mind",
  },
  {
    name: "mohit chhabra",
    pic: "https://i.pinimg.com/736x/22/8b/cf/228bcf5a0800f813cd1744d4ccbf01ea.jpg",
    bio: "aesthetic overload 📸🕊️ | living in lowercase",
  },
];

function showUsers(arr) {
  arr.forEach(function (user) {
    // Create outer card div
    const card = document.createElement("div");
    card.classList.add("card");

    // Create image
    const img = document.createElement("img");
    img.src = user.pic;
    img.classList.add("bg-img");

    // Create blurred-layer div
    const blurredLayer = document.createElement("div");
    blurredLayer.style.backgroundImage = `url(${user.pic})`;
    blurredLayer.classList.add("blurred-layer");

    // Create content div
    const content = document.createElement("div");
    content.classList.add("content");

    // Create h3 and paragraph
    const heading = document.createElement("h3");
    heading.textContent = user.name;

    const para = document.createElement("p");
    para.textContent = user.bio;

    // Append heading and paragraph to content
    content.appendChild(heading);
    content.appendChild(para);

    // Append all to card
    card.appendChild(img);
    card.appendChild(blurredLayer);
    card.appendChild(content);

    // Finally, append card to the body or any container
    document.querySelector(".cards").appendChild(card);
  });
}

showUsers(users);

let inp = document.querySelector(".inp");
inp.addEventListener("input", function () {
  let newUsers = users.filter((user) => {
    return user.name.startsWith(inp.value);
  });

  document.querySelector(".cards").innerHTML = "";
  showUsers(newUsers);
});