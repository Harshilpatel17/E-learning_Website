

    var firebaseConfig = {
    apiKey: "AIzaSyBymk33wVuby4GGQk_Jm0DdhjZKl9VDEKo",
    authDomain: "enoavte.firebaseapp.com",
    databaseURL: "https://enoavte-default-rtdb.firebaseio.com",
    projectId: "enoavte",
    storageBucket: "enoavte.appspot.com",
    messagingSenderId: "239659712187",
    appId: "1:239659712187:web:8eca6b7dcad2c55dfa339e",
    measurementId: "G-1HKN6DQLFE"
};
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

    let name1 = sessionStorage.getItem('NAME');
    if(name1=="yash"){
        firebase.auth().signOut();
    }
    firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
    // User is signed in.
        window.location="Home.html";
        var user = firebase.auth().currentUser;

    if(user != null){
    var email_id = user.email;localStorage.setItem('uid',user.uid);
    document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;
    alert("not done ");
}
} else {
    alert("Please Log In !");
}
});

    function signUp(){
    const userEmail=document.getElementById("email").value;
    const userPass=document.getElementById("password").value;
    const confirm=document.getElementById("confirm").value;
    if(userPass!=confirm){
        alert("Password And Confirm Password Doesn't Match")
    }
    else {
        firebase.auth().createUserWithEmailAndPassword(userEmail, userPass)
            .then(alert('Welcome '+userEmail+' ! Please Sign In With The Credential You Entered'))

            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                alert(errorMessage)
                // ..
            });
    }



}
    function login(){

    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;

    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);
    alert("Error : " + errorMessage)
    // ...
});

}
function logout1(){
        firebase.auth().signOut().then(() => {
            // Sign-out successful.
            sessionStorage.setItem("NAME", "yash");
            window.location="index.html";
            alert("Log-in Again To Learn And Grow With Us")
        }).catch((error) => {
            // An error happened.
        });
}
    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const container = document.querySelector(".container");

    sign_up_btn.addEventListener("click", () => {
        container.classList.add("sign-up-mode");
    });

    sign_in_btn.addEventListener("click", () => {
        container.classList.remove("sign-up-mode");
    });