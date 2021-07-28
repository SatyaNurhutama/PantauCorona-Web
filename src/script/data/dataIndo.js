window.onload = function() {
	getCovidStats();
}

function getCovidStats() {
	fetch('https://coronavirus-19-api.herokuapp.com/countries/indonesia')
	.then(function(resp) { return resp.json() })
	.then(function(data) {
		const totPos = data.cases;
		const totMeningg = data.deaths;
		const totSemb = data.recovered;

		document.getElementById('jumlPos').innerHTML = totPos.toLocaleString('en');
		document.getElementById('jumlMeningg').innerHTML = totMeningg.toLocaleString('en');
		document.getElementById('jumlSemb').innerHTML = totSemb.toLocaleString('en');

	})
	.catch(function() {
		console.log("error");
	})
}

