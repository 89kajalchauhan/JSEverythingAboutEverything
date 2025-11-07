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


 let form =  document.querySelector("form");
 let inputs = document.querySelectorAll("input");

 form.addEventListener("submit", function(dets){
     dets.preventDefault();

    console.log(
        inputs[0].value,
        inputs[1].value,
        inputs[2].value,
        inputs[3].value
    );
 });























