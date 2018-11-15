$(document).ready(function(){
	$.ajax({
		// pass in an AJAX object - aka, a collection of properties and values
		// need to plug in personal API Key into the URL, put API instead of samples.
		// everything after the ? mark is a query parameter.  
		// url: "https://api.openweathermap.org/data/2.5/find?",
		url: "https://api.openweathermap.org/data/2.5/group?id=5128638,2643743,6455259&units=imperial&appid=ed7d4bd569ea47d6977b23309d12cd51",
		// New York, London, Paris
		// different types of AJAX requests
		type: "GET",
		dataType: "JSON",
		// you can divide/break up the URL that was above with the stuff below with where your ? marks are
		// data: {
		// 	q: "London", "New York",
		// 	units: "imperial",
		// 	appid: "ed7d4bd569ea47d6977b23309d12cd51",
		// },
		// below: tell it what to do based on success or error

		// $("button").click(function() {

		button.click(function(){
			// toggle() toggles between hide() and show()
			// toggleClass() toggles between addClass() and removeClass()
			// $('p').toggle();
			('p').toggleClass('red');
		})	

		// $("p").show(1000);
		// 	alert("The paragraph is now hidden");
		// 	}


	// 	success: function(data) {
	// 		// print all of the JSON to the console
	// 		console.log(data);
	// 		console.log(data.list[0].main.temp);
	// 		$("button").html("It's currently: " + data.list[0].main.temp);
	// 	},
	// 	error: function(data, textStatus, errorThrown) {
	// 		console.log("whomp, whomp");
	// 		// Do something to handle the error
	// 		console.log(errorThrown);
	// 	}

	// })


})