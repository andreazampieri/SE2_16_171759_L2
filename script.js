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
		fillTable();
		var form = document.getElementById("insertform");
		form.style.display = "none";
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
}