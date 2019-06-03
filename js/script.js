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

$( document ).ready(function() {
    var care = document.getElementById('care-img'); 
	//or however you get a handle to the IMG
	var height = care.clientHeight;

    $("#care-example").css("height",height);
    console.log(height);

    var article = document.getElementById('article-img'); 
	//or however you get a handle to the IMG
	var height = article.clientHeight;

    $("#article-example").css("height",height);
    $("#article-example2").css("height",height);
    console.log(height);
});

$('.slick-carousel').slick({
	infinite: false,
	vertical:true,
	verticalSwiping:true,
	slidesToShow: 1,
	slidesToScroll: 1,
	prevArrow: $('.top-arrow'),
	nextArrow: $('.bottom-arrow')
});

$('.value-carousel').slick({
	infinite: false,
	vertical:true,
	verticalSwiping:true,
	slidesToShow: 1,
	slidesToScroll: 1,
	prevArrow: $('#value-top-arrow'),
	nextArrow: $('#value-bottom-arrow')
});

$('.care-carousel').slick({
	infinite: true,
	vertical:true,
	verticalSwiping:true,
	slidesToShow: 1,
	slidesToScroll: 1,
	prevArrow: $('#care-top-arrow'),
	nextArrow: $('#care-bottom-arrow'),
	adaptiveHeight: true
});

$('.article-carousel').slick({
	infinite: true,
	vertical:true,
	verticalSwiping:true,
	slidesToShow: 1,
	slidesToScroll: 1,
	prevArrow: $('#article-top-arrow'),
	nextArrow: $('#article-bottom-arrow'),
	adaptiveHeight: true
});