function calculateCost() {
	if (document.getElementById("from").value != null && document.getElementById("adults").value != null) {
		// Calculating the number of days...
		var d1 = document.getElementById("from").value;
		var d2 = document.getElementById("to").value;

		const date1 = new Date(d1);	
		const date2 = new Date(d2);
		const time = Math.abs(date2 - date1);		
		const days = Math.ceil(time / (1000*60*60*24));

		// Calculating the actual price
		const adults = document.getElementById("adults").value;
		var price = 1000*adults*days;

		// Setting the total value
		document.getElementById("total").value = "₹ "+ price;
	}
}

function disableDates() {
	var fromDate = document.getElementById("from").value;
	document.getElementById("to").setAttribute('min', fromDate);
}

// Setting todayas minimum for the from date input feild
var today = new Date().toISOString().split('T')[0];
document.getElementById("from").setAttribute('min', today);