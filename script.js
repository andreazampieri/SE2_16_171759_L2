function toggle_display() {
	var form = document.getElementById("insertform");
	form.style.display = form.style.display=="none" ? "block" : "none";
}

var stuff = {
	names:["Chair","Candies","Pens"], 
	quantities:[1,5,2],
	addItem : function(name,quantity){
		if((i=names.indexof(name))!=-1){
			quantities[i] += quantity;
		}else{
			names.push(name);
			quantities.push(quantity);
		}
	}
};

function displayTable(){
	var table = document.getElementById("table");
	var length = table.rows.length;
	for(var i=0;i<length;i++){
		table.deleteRow(0);
	}
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

function addItems(){

}