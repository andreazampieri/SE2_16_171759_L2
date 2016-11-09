function toggle_display() {
	var form = document.getElementById("insertform");
	form.style.display = form.style.display=="none" ? "block" : "none";
}

var stuff = {
	names:["Chair","Candies","Pens"], 
	quantities:[1,5,2]
};

function displayTable(){
	var table = document.getElementById("table");
	
	table.insertRow(0);
	for(var i=0;i<stuff.quantities.length;i++){
		newcell=table.rows[0].insertCell(i);
		newcell.innerHTML=stuff.quantities[i];
	}
	table.insertRow(0);
	for(var i=0;i<stuff.names.length;i++){
		newcell=table.rows[0].insertCell(i);
		newcell.innerHTML=stuff.names[i];
	}
}