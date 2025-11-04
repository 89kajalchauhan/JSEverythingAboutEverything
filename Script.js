//let sel = document.querySelector("select");
//let device = document.querySelector("#device");

//sel.addEventListener("change", function (dets) {
//  device.textContent = `${dets.target.value} Device Selected`;}):

//let h1 = document.querySelector("h1");

//window.addEventListener("keydown", function(dets){
// if(dets.key === " "){
  //h1.textContent = "SPC";

// } else{
//  h1.textContent = dets.key;
// }



//h1.textContent = dets.key;

//});


let Button = document.querySelector("#Button");
 let fileinp = document.querySelector("#fileinp");

Button.addEventListener("click", function(){
   fileinp.click();
     

});

fileinp.addEventListener("change", function(dets){
  
    const file = dets.target.files[0],
    if (file) {
     Button.textContent = file.name; 
    }
   }
  
);
























