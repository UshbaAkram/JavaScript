import { onAuthStateChanged , createUserWithEmailAndPassword, signInWithEmailAndPassword,  sendPasswordResetEmail} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

// Initialize Firebase app and auth
import { app, auth, getDatabase,ref, set,onValue , update} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js";

const db = getDatabase();
const msg = document.getElementById('msg');
const logIn = document.getElementById('login');
const signUp = document.getElementById('signUp');
const refr=ref(db,"/users")
onValue(refr,(snapshot)=>{
  const data= snapshot.val();
  console.log("data from db: " + data.email)
 })

 console.log("data from db: " )
    signUp.addEventListener('click', (event) => {
      event.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('pswd').value;
      const userName = document.getElementById('uname').value;
      console.log("Form Sign up")
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          const user = userCredential.user;
          const uid = user.uid;
          
          update(ref(db, 'students/' + uid + '/'), { 
              name: userName,
              email: email 
          })
          .then(() => {
              console.log('User signed up and data saved!');
              localStorage.setItem('userName', userName); 
              location.replace("C:\Users\User\OneDrive\Desktop\Web Development\Portal_Project\skillsync_dashboard.html"); 
          });
      })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("error is : ", errorCode, errorMessage);
      });
  }); 


  logIn.addEventListener('click', (event) => {
    event.preventDefault();
    const email = document.getElementById('txt-input').value;
    const password = document.getElementById('pwd').value;
    console.log("Form Sign In " + email + password)
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        const uid = user.uid;
        
        // Fetch the user's name from the database based on UID
        const userRef = ref(db, 'students/' + uid);
        onValue(userRef, (snapshot) => {
            if (snapshot.exists()) {
                const userData = snapshot.val();
                const userName = userData.name; // Get the name from the database
                localStorage.setItem('userName', userName);
                console.log("Sign in " + userName);
                location.replace("C:\Users\User\OneDrive\Desktop\Web Development\Portal_Project\skillsync_dashboard.html");
            } else {
                console.log("User document does not exist");
            }
        });
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("error in signup is : ", errorCode, errorMessage);
    });
});

//     createUserWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//     alert("_in function_");
//    // console.log("Sign up " + userCredential.user)
//   //  const dataUser={
//   //     name:userName,
//   //     email:email
//   //   }
//   update(ref(db,'students/'+userName+'/' ),{
//     // userName:dataUser
//     name:userName,
//     email:email
//   })
//   }).then(() => {
//     console.log('User signed up and data saved!');
//     localStorage.setItem('userName', userName);
//     const userName = localStorage.getItem('userName');
//     alert(userName +"_in username");
//     location.replace("../categories.html");
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     console.log("error is : ", errorCode, errorMessage)
//     // ..
//   });
//  })

// logIn.addEventListener('click', (event)=>{
//     event.preventDefault();

//    // document.getElementById('heading').innerHTML="Sign Up";
     
//     const email = document.getElementById('txt-input').value;
//     const password = document.getElementById('pwd').value;
//     console.log("Form Sign In " + email + password)
//     signInWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       const userName = document.getElementById('uname').value;
//       const user = userCredential.user;
//       console.log(user)
//     localStorage.setItem('userName', userName);
//     alert(userName +"_in username");
//     console.log("Sign up" + userName)
//     alert("_in function_");
    
//     //location.replace("C:\Users\User\OneDrive\Desktop\Web Development\Portal_Project\categories.html");
//     location.replace("../categories.html");
    
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     console.log("error in signup is : ", errorCode, errorMessage)
//     // ..
//   });
// })

// document.getElementById("forgot").addEventListener('click',(event)=>{
//     const email = document.getElementById('txt-input').value;

//     sendPasswordResetEmail(auth, email)
//   .then(() => {
//     // Password reset email sent!
//     console.log("Password reset email sent!");
//   })
// })

// //Set up onAuthStateChanged listener
// onAuthStateChanged(auth, (user) => {
//     if (user!== null) {
//       const uid = user.displayName;
//       console.log(uid + " _____name____")
//       alert(uid + " _____name____")
//     }
// });
//export{userName}

// const formSubmit=document.getElementById("formSubmit")

// formSubmit.addEventListener('click',(event)=>{
//   event.preventDefault();
//   console.log("Profile updated!")
//   // updateProfile(auth.currentUser, {
//   //           course:courseName
//   //         }).then(() => {
//   //           // Profile updated!
//   //           console.log("Profile updated!")
//   //           location.replace("../skillsync_dashboard.html");
//   //         }).catch((error) => {
//   //           // An error occurred
//   //           // ...
//   //         });
//})