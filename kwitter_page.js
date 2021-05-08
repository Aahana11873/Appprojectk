//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyBgL6Th5tZoWAiUd0bti9wilzJSeADTmv0",
    authDomain: "kwitter-b9c56.firebaseapp.com",
    databaseURL: "https://kwitter-b9c56-default-rtdb.firebaseio.com",
    projectId: "kwitter-b9c56",
    storageBucket: "kwitter-b9c56.appspot.com",
    messagingSenderId: "770725006515",
    appId: "1:770725006515:web:eb035be8913212d7d634c6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
function send()
{
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
    });
document.getElementById("msg").value="";

}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
function logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}

