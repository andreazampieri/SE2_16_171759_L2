function toggle_display() {
	var form = document.getElementById("insertform");
	form.style.display = form.style.display=="none" ? "block" : "none";
}

var stuff = {
	names:["Chair","Candies","Pens"], 
	quantities:[1,5,2],
	addItems : function(name,quantity){
		i = this.names.indexOf(name);
		if(i!=-1){
			this.quantities[i] += quantity;
		}else{
			this.names.push(name);
			this.quantities.push(quantity);
		}
	}
};

function fillTable(){
	var table = document.getElementById("table");
	table.insertRow(0);
	for(var i=0;i<stuff.quantities.length;i++){
		newcell=table.rows[0].insertCell(i);
		newcell.innerHTML=stuff.quantities[i];
	}
	table.insertRow(0);
	for(var j=0;j<stuff.names.length;j++){
		newcell=table.rows[0].insertCell(j);
		newcell.innerHTML=stuff.names[j];
	}
}

function addItems(){
	var item=document.getElementById("item");
	var quantity=document.getElementById("quantity");
	var error = document.getElementById("error");
	if(!isPositiveInt(quantity.value) || item.value == ""){
		error.innerHTML = "Insert a name and a positive integer!";
	}
	else{
		error.innerHTML = "";
		stuff.addItems(item.value,parseInt(quantity.value));
		var form = document.getElementById("insertform");
		form.style.display = "none";
		refreshTableContent();
	}
}

function isInt(x){
	return !isNaN(parseInt(x));
}

function isPositiveInt(x){
	return isInt(x) && parseInt(x)>0;
}

function refreshTableContent(){
	var table = document.getElementById("table");
	var table_length = table.rows[0].cells.length;
	if (table_length == stuff.names.length) {
		var row = table.rows[1];
		for(var i=0;i<stuff.quantities.length;i++){
			row.cells[i].innerHTML = stuff.quantities[i];
		}
	} 
	else if(table_length == stuff.names.length-1) {
		var namesrow = table.rows[0];
		var quantityrow = table.rows[1];
		var length = namesrow.length;

	}
	else{
		alert("Something went wrong",table_length);
	}
}