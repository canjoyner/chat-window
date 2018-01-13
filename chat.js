


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBtn25utupWGA-K27zebF9kC3xzUMvRYqw",
    authDomain: "chatwindows-f21ec.firebaseapp.com",
    databaseURL: "https://chatwindows-f21ec.firebaseio.com",
    projectId: "chatwindows-f21ec",
    storageBucket: "chatwindows-f21ec.appspot.com",
    messagingSenderId: "509707620577"
  };
  firebase.initializeApp(config);



// Create a variable to reference the database
var database = firebase.database();

// Use the below initialValue
var typeSomething ="" ;
var somethingTyped ="";

var typeSomething2 ="" ;
var somethingTyped2 ="";

$("#submit").on("click", function(snapshot) {	

	typeSomething = $("#typeHere").val().trim();
	database.ref().set({
		chat:typeSomething,})
	});

database.ref().on("value", function(snapshot) {
	somethingTyped = snapshot.val().chat;
	// somethingTyped2 = snapshot.val().chat2;
	$("#printSomething").append(somethingTyped);
	$("#printSomething").text(somethingTyped);
	console.log(somethingTyped)

})



$("#submit2").on("click", function(snapshot) {	

	typeSomething2 = $("#typeHere2").val().trim();
	database.ref().set({
		chat2:typeSomething2,})
	});

database.ref().on("value", function(snapshot) {
	somethingTyped2 = snapshot.val().chat2;
	$("#printSomething2").append(somethingTyped2);
	$("#printSomething2").text(somethingTyped2);
	console.log(somethingTyped2)

})