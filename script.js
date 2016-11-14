function toggle_display() {
	var form = document.getElementById("insertform");
	form.style.display = form.style.display=="none" ? "block" : "none";
	var item = document.getElementById("item");
	var quantity = document.getElementById("quantity");
	item.value = "";
	quantity.value = "";
}

var stuff = {
	names:["Chair","Candies","Pens"], 
	quantities:[1,5,2],
	capacity: 42,
	addItems : function(name,quantity){
		i = this.names.indexOf(name);
		if(i!=-1){
			this.quantities[i] += quantity;
		}else{
			this.names.push(name);
			this.quantities.push(quantity);
		}
	},
	numberOfStuff : function(){
		var sum = 0;
		for(var i=0;i<this.quantities.length;i++){
			sum += this.quantities[i];
		}
		return sum;
	}
};

function fillContent(){
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

	var capacity = document.getElementById("capacity");
	capacity.value = stuff.capacity;
}

function addItems(){
	var item=document.getElementById("item");
	var quantity=document.getElementById("quantity");
	var error = document.getElementById("errorForm");
	if(!isPositiveInt(quantity.value) || item.value == ""){
		error.style.display = "block";
	}
	else{
		error.style.display = "none";
		stuff.addItems(item.value,parseInt(quantity.value));
		var form = document.getElementById("insertform");
		form.style.display = "none";
		refreshTableContent();
		var capacity = document.getElementById("capacity");
		if(isPositiveInt(capacity.value)){
			stuff.capacity = parseInt(capacity.value);
		}
		if(stuff.capacity < stuff.numberOfStuff()){
			alert("Capacity exceeded!");
		}
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
		var newname = namesrow.insertCell(namesrow.cells.length);
		var newquantity = quantityrow.insertCell(quantityrow.cells.length);
		newname.innerHTML = stuff.names[stuff.names.length-1];
		newquantity.innerHTML = stuff.quantities[stuff.quantities.length-1];
	}
	else{
		alert("Something went wrong",table_length);
	}
}

function checkCapacity(){
	var capacity = document.getElementById("capacity");
	
}

function checkPosIntValue(idval,iderr){
	var elem = document.getElementById(idval);
	var error = document.getElementById(iderr)
	error.style.display = isPositiveInt(elem.value)?"none":"block";
}