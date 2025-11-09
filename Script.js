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

window.addEventListener("keydown", function(){

  console.log("key pressed:",event.key );
});
