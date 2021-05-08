

//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
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
document.getElementById("user_name").innerHTML="welcome "+user_name+"!";
function addRoom()
{
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_room.html";
}
function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
console.log("Room Name -"+Room_names);
row="<div class='room_name' id="+Room_names+"  onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
                  //End code
            });
      });
}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
