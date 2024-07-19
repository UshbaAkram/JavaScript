//_________Call Backs_______________

function disply(d){
    document.getElementById("demo").innerHTML=d;   // 1 function bnya ,usy 2sry function m call krliya
}                                                     // mn disply function bna kr calculator fun krya 

function calculater(a, b, calldiaplay){
   let sum= a+b;
    calldiaplay(sum);
}

calculater(3 , 4 , disply);                     //3,4 argu or dipaly function pass krwaya h but () nhi lgani


//___waiting using CAllBacks_________
function myfun(x){
    document.getElementById("demo5").innerHTML=x;
}
setTimeout(()=>{
    myfun("Hy !!");
} , 1000)


//______________________waiting using PROMISES________________


// const myProm = new Promise(function(myResolve,myReject){        //Promise 1 class jo bukit in h, uska object bnya hmny myProm, class ky andr 1 func pass krna h us function ky andr 2 function as argument hn myResolve ,myReject ye dono n builtin h 
//     setTimeout(() => {
//         myResolve("Here Promise is dispalyed : )")
//     },1000)
// })

// myProm.then((x) => {
//     document.getElementById("demo6").innerHTML=x;        //   jo promise ky function ky andr aruguments pass kye thy(wo khud b function hi thy builtin) unko .then() krkry access krty hn inky andr fuction bna kr koi b value print krwa lo
// })





// let myProm = new Promise(function(myResolve,myReject){        //Promise 1 class jo bukit in h, uska object bnya hmny myProm, class ky andr 1 func pass krna h us function ky andr 2 function as argument hn myResolve ,myReject ye dono n builtin h 
//  let x=0;
//     if(x==0)
//        { myResolve("Here Promise is dispalyed : )"); }
//     else
//       {  myReject("I will show Error :(");}
    
// });

// myProm.then(
//     function(value) {
//         document.getElementById("demo6").innerHTML=value;                   //   jo promise ky function ky andr aruguments pass kye thy(wo khud b function hi thy builtin) unko .then() krkry access krty hn inky andr fuction bna kr koi b value print krwa lo
//     },
//     function(error) {
//         document.getElementById("demo6").innerHTML=error;                   //   jo promise ky function ky andr aruguments pass kye thy(wo khud b function hi thy builtin) unko .then() krkry access krty hn inky andr fuction bna kr koi b value print krwa lo
//     }
// );



// const myprom = new promise ((myResolve,myReject) => {
//     let x=0;
//     if (x==0){
//         myResolve("I am promise resolve");
//     }
//     else{
//         myReject("I am reject I show Eroors ")
//     }
// }
// )

// myprom.then(

// );



function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
  }
  

function getFile(myCallback) {
    let req = new XMLHttpRequest();
    req.onload = function() {
      if (req.status == 200) {
        myCallback(this.responseText);
      } else {
        myCallback("Error: " + req.status);
      }
    }
    req.open('GET', "file.html");//F:/Bootstrap4/conFusion/Template 2/try.html
    req.send();
  }
  getFile(myDisplayer);
  


// __________evenets_______

//const eventCheck = document.querySelector('.event');

// Define a function to handle a click event
 function handleClick(event) {
  // Prevent the default action of the click event
  event.preventDefault();

  // Log the type of event
  console.log("Event type:", event.type);

  // Log the timestamp of the event
  console.log("Timestamp:", event.timeStamp);

  // Get the target element that triggered the event and log its tag name
  console.log("Target element tag name:", event.target.tagName);

  // Log the coordinates of the click event relative to the client area of the browser window
  console.log("Horizontal coordinate (clientX):", event.clientX);
  console.log("Vertical coordinate (clientY):", event.clientY);

  // Log the coordinates of the click event relative to the screen
  console.log("Horizontal coordinate (screenX):", event.screenX);
  console.log("Vertical coordinate (screenY):", event.screenY);

  // Check if the Alt key was pressed when the event occurred
  console.log("Alt key pressed:", event.altKey);

  // Check if the Shift key was pressed when the event occurred
  console.log("Shift key pressed:", event.shiftKey);
}

// Add a click event listener to the document body
document.body.addEventListener("click", handleClick);

