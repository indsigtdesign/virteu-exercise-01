// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: "AIzaSyBALwXjRX5ffPSSVEOFfmZYqc6rvDQATnc",
	authDomain: "virt-eu.firebaseapp.com",
	databaseURL: "https://virt-eu.firebaseio.com",
	projectId: "virt-eu",
	storageBucket: "virt-eu.appspot.com",
	messagingSenderId: "404122108683",
	appId: "1:404122108683:web:42ea2ba1086bc4a3"
};

function submit_data(argument) {
	// Initialize Firebase
	firebase.initializeApp(firebaseConfig);

	var db = firebase.firestore();

	db.collection("teams").add({
	    members: "3",
	    name: "Mathison",
	    values: ["value_4","value_5","value_6"]
	})
	.then(function(docRef) {
	    console.log("Document written with ID: ", docRef.id);
	})
	.catch(function(error) {
	    console.error("Error adding document: ", error);
	});

}

$(document).ready(function() {
	$('.minus').click(function () {
		var $input = $(this).parent().find('input');
		var count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
		return false;
	});
	$('.plus').click(function () {
		var $input = $(this).parent().find('input');
		$input.val(parseInt($input.val()) + 1);
		$input.change();
		return false;
	});
});