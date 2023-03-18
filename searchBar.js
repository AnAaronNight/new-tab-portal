const f = document.getElementById("search-bar");
const q = document.getElementById("query");

function submitted(event) {
	event.preventDefault();
	const url = `https://www.google.com/search?q=${q.value}`
	open(url, "_self")
}

f.addEventListener("submit", submitted)