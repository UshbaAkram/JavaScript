//______________Promises_______________

const promiseOne = new Promise(function (resolve,reject){
    setTimeout(() => {
        console.log("Here is the Promise!")
        resolve({name:"chai",cup:"unlimited"});
    },1000)
    
}).then((drink) => {
    console.log(drink)
    console.log(drink.name + " drink.name in then1")
    return drink.name
       // console.log("Promise is resolved :)")
    }).then((dname) => {
        console.log(dname + " is the name of object in then 2")
    })
//one way 
// promiseOne.then(() => {
//     console.log("Promise is resolved :)")
// })

//____Promise 2____

const promiseSecond = new Promise((resolve,reject) => {
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({name:"Ushba",age:21});
        }
        else{
            reject("Error : Something Went Wrong")
        }
    },1000)
}).then((user) => {
    return user.name
}).then((name) => {
    console.log(name)
}).catch((error) => {
    console.log(error)
})

//____Promise 3____

const promiseThird = new Promise((resolve,reject) => {
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({name:"Ushba Akram",age:21});
        }
        else{
            reject("Error : Something Went Wrong")
        }
    },1000)
})

async function consumePromiseThird(){
    try{
        const response = await promiseThird;
        console.log(response.name)
    }
    catch(error){
        console.log(error)
    }
}

consumePromiseThird()


//____Promise 4____

// const promiseFour = new Promise((resolve,reject) => {
//     setTimeout(function(){
//         let error = false;
//         if(!error){
//             resolve({name:"Ushba Akram",age:21});
//         }
//         else{
//             reject("Error : Something Went Wrong")
//         }
//     },1000)
// })

async function consumePromiseFour(){
    try{
        
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await response.json();
        console.log(data)
    }
    catch(error){
        console.log(error)
    }
    // try {
    //     const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    //     const postData = await response.json();
    //     console.log(postData)
    //     return postData;
    //   } catch (error) {
    //     console.error('Error fetching post:', error);
    //     throw error;
    //   }
}

consumePromiseFour()



function greet(){
    var name = document.getElementById('nameInput').value;
   
    document.getElementById('greetingMessage').innerHTML="Hello! " + name + "! Welcome to the Our Website.";

}

function greet1(){
    setTimeout(greet, 5000);
}

// // Define a class representing a Greeting
// class Greeting {
//     constructor(name) {
//       this.name = name;
//     }
  
//     // Method to generate the greeting message
//     generateGreeting() {
//       return `Hello, ${this.name}! Welcome to the Greeting App.`;
//     }
//   }
  
//   // Function to asynchronously display greeting message
//   async function displayGreeting() {
//     const nameInput = document.getElementById('nameInput').value;
//     if (!nameInput) {
//       alert('Please enter your name.');
//       return;
//     }
  
//     const greeting = new Greeting(nameInput);
//     const greetingMessage = greeting.generateGreeting();
  
//     // Simulate asynchronous behavior with setTimeout
//     await new Promise(resolve => setTimeout(resolve, 1000));
  
//     const greetingDisplay = document.getElementById('greetingMessage');
//     greetingDisplay.textContent = greetingMessage;
//   }
  
//   // Event listener for button click to display greeting
//   document.getElementById('greetBtn').addEventListener('click', displayGreeting);
  