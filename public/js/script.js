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

function submit_data() {
	// Initialize Firebase
	firebase.initializeApp(firebaseConfig);

	var db = firebase.firestore();

	var teamName = window.localStorage.getItem('teamName');
	var teamMembers = window.localStorage.getItem('teamMembers');
	var teamVals = JSON.parse(window.localStorage.getItem('teamVals'));
	var contact = JSON.parse(window.localStorage.getItem('contact'));
	var beganPrototype = window.localStorage.getItem('beganPrototype');
	var endedPrototype = new Date();

	db.collection("teams").add({
	    members: teamMembers,
	    name: teamName,
	    values: teamVals,
	    contact:contact,
	    beganPrototype:beganPrototype,
	    endedPrototype: endedPrototype
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

    var value = document.getElementById('value-card');

    var slick = document.getElementById('slick-card'); 
	//or however you get a handle to the IMG
	var height = slick.clientHeight;

    $(".slick-card").css("height",(height - 58));

    var value = document.getElementById('value-card'); 

	//or however you get a handle to the IMG
	var height = value.clientHeight;

    $(".value").css("height",(height - 58));

    var describe = document.getElementById('describe-img'); 
	//or however you get a handle to the IMG
	var height = describe.clientHeight;

    $("#describe-example").css("height",height);
    $(".card-img").css("height",height);

    var article = document.getElementById('article-img'); 
	//or however you get a handle to the IMG
	var height = article.clientHeight;

    $("#article-example").css("height",height);
    $("#article-example2").css("height",height);
});

$('.slick-carousel').slick({
	infinite: true,
	vertical:true,
	verticalSwiping:true,
	slidesToShow: 1,
	slidesToScroll: 1,
	prevArrow: $('.top-arrow'),
	nextArrow: $('.bottom-arrow'),
	adaptiveHeight: true
});

$('.value-carousel').slick({
	infinite: true,
	vertical:true,
	verticalSwiping:true,
	slidesToShow: 1,
	slidesToScroll: 1,
	prevArrow: $('#value-top-arrow'),
	nextArrow: $('#value-bottom-arrow'),
	adaptiveHeight: true
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

$('.list-carousel').slick({
	infinite: true,
	vertical:true,
	verticalSwiping:true,
	slidesToShow: 1,
	slidesToScroll: 1,
	prevArrow: $('#list-top-arrow'),
	nextArrow: $('#list-bottom-arrow'),
});

$('.describe-carousel').slick({
	infinite: true,
	vertical:true,
	verticalSwiping:true,
	slidesToShow: 1,
	slidesToScroll: 1,
	prevArrow: $('#describe-top-arrow'),
	nextArrow: $('#describe-bottom-arrow'),
});

$('.valueList-carousel').slick({
	infinite: true,
	vertical:true,
	verticalSwiping:true,
	slidesToShow: 1,
	slidesToScroll: 1,
	prevArrow: $('#valueList-top-arrow'),
	nextArrow: $('#valueList-bottom-arrow'),
});

function getTeamNumber() {
	var x = document.getElementById("teamNumber").value;
	localStorage.setItem('teamMembers', x);
	genQRcode(x);
}

var qrCodeArray = ["img/qr/1.png","img/qr/2.png","img/qr/3.png","img/qr/4.png","img/qr/5.png","img/qr/6.png"];

function genQRcode(teamNumber) {
    for (var i = 0; i < teamNumber; i++) {
    	var min = 0; 
    	var max = qrCodeArray.length;
      	var qrCode = Math.floor(Math.random() * (+max - +min)) + +min;

      	$("#qrCodes").append("<div class='qrCode'> <h3>Story number "+(i+1)+"</h3> <img src='"+qrCodeArray[qrCode]+"' rel='nofollow' alt='qr code' class='qr'> </div>");

      	qrCodeArray.splice(qrCode, 1);
    }  
}

function saveTeamName() {
	var x = document.getElementById("teamName").value;
	localStorage.setItem('teamName', x);
	var beganPrototype = new Date();
	localStorage.setItem('beganPrototype', beganPrototype);
}

function commitVals(){
	var V1_vals = document.getElementById("V1-vals").value;
	var V1_defs = document.getElementById("V1-defs").value;
	var V1_act = document.getElementById("V1-act").value;

	var V2_vals = document.getElementById("V2-vals").value;
	var V2_defs = document.getElementById("V2-defs").value;
	var V2_act = document.getElementById("V2-act").value;

	var V3_vals = document.getElementById("V3-vals").value;
	var V3_defs = document.getElementById("V3-defs").value;
	var V3_act = document.getElementById("V3-act").value;

	var V4_vals = document.getElementById("V4-vals").value;
	var V4_defs = document.getElementById("V4-defs").value;
	var V4_act = document.getElementById("V4-act").value;

	var V5_vals = document.getElementById("V5-vals").value;
	var V5_defs = document.getElementById("V5-defs").value;
	var V5_act = document.getElementById("V5-act").value;

	var teamVals = {
		"value": {
			"val_1":{
				"vals":V1_vals,
				"defs":V1_defs,
				"act":V1_act
			},
			"val_2":{
				"vals":V2_vals,
				"defs":V2_defs,
				"act":V2_act
			},
			"val_3":{
				"vals":V3_vals,
				"defs":V3_defs,
				"act":V3_act
			},
			"val_4":{
				"vals":V4_vals,
				"defs":V4_defs,
				"act":V4_act
			},
			"val_5":{
				"vals":V5_vals,
				"defs":V5_defs,
				"act":V5_act
			},
		}
	}
	localStorage.setItem('teamVals', JSON.stringify(teamVals));
}

function submit(){
	var yes_tools = document.getElementById("yes_tools").checked;
	var no_tools = document.getElementById("no_tools").checked;

	var yes_interview = document.getElementById("yes_interview").checked;
	var no_interview = document.getElementById("no_interview").checked;

	console.log(yes_tools + " : " + no_tools + " : " + yes_interview + " : " + no_interview);

	var contact = {
		"more_tools":{
			"yes":yes_tools,
			"no":no_tools
		},
		"interview":{
			"yes":yes_interview,
			"no":no_interview
		}
	}
	localStorage.setItem('contact', JSON.stringify(contact));

	submit_data();
}