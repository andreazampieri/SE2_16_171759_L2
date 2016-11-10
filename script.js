function toggle_display() {
	var form = document.getElementById("insertform");
	form.style.display = form.style.display=="none" ? "block" : "none";
}

var stuff = {
	names:["Chair","Candies","Pens"], 
	quantities:[1,5,2],
	addItem : function(name,quantity){
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
	if(!isPositiveInt(quantity)){
		document.getElementById("error").innerHTML = "The quantity must be a positive integer";
	}
	else{

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