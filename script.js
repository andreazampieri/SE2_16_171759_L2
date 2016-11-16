// Variable that contains the data and the methods required to access/update it
var stuff = {
	names:["Chocolate","Candies","Pizza"],	//names and quantities represent the things in the warehouse 
	quantities:[1,5,2],					  	//an item is described by its index i (names[i] and quantities[i])
	capacity: 30,							//maximum capacity of the warehouse
	/*
	 * Adds the new item with its quant. if it's a new one,
	 * otherwise adds the new quant. to the old one
	 * @param name      , the name of the item
	 * @param quantity  , its quantity
	*/
	addItems : function(name,quantity){
		i = this.names.indexOf(name);
		//check if it's already present
		if(i!=-1){
			//increment
			this.quantities[i] += quantity;
		}else{
			//add the new element
			this.names.push(name);
			this.quantities.push(quantity);
		}
	},

	/**
	 * Counts the total number of stuff in the warehouse
	 *
	 * @return sum, the sum of each quantity
	 */
	numberOfStuff : function(){
		var sum = 0;
		for(var i=0;i<this.quantities.length;i++){
			sum += this.quantities[i];
		}
		return sum;
	}
};

/**
 * Toggles the visibility of the input form (resetting its fields)
 */
function toggle_display() {
	var form = document.getElementById("insertform");
	form.style.display = form.style.display=="none" ? "block" : "none";
	var item = document.getElementById("item");
	var quantity = document.getElementById("quantity");
	item.value = "";
	quantity.value = "";
}


/**
 * Inserts the values in the table and the capacity in the field
 * This method is called once when the page is loaded
 */
function fillContent(){
	var table = document.getElementById("table");
	//inserts the row with the quantities
	table.insertRow(0);
	for(var i=0;i<stuff.quantities.length;i++){
		newcell=table.rows[0].insertCell(i);
		newcell.innerHTML=stuff.quantities[i];
	}
	//inserts the row with the names on top of the quantities
	table.insertRow(0);
	for(var j=0;j<stuff.names.length;j++){
		newcell=table.rows[0].insertCell(j);
		newcell.innerHTML=stuff.names[j];
	}
	// the input of the capacity is set
	var capacity = document.getElementById("capacity");
	capacity.value = stuff.capacity;
}


/**
 * Checks if the item is legal(has a name and a valid quantity)
 * if so, the item is added to the warehouse
 * otherwise shows the error message
 * 
 * in case the capacity is exceeded, a message in shown in a popup
 */
function addItems(){
	var item=document.getElementById("item");
	var quantity=document.getElementById("quantity");
	var error = document.getElementById("errorForm");
	// if the quantity isn't valid -> display the error
	if(!isPositiveInt(quantity.value) || item.value == ""){
		error.style.display = "block";
	}
	//otherwise add the items, hide the input form and update the values
	else{
		error.style.display = "none";
		stuff.addItems(item.value,parseInt(quantity.value));
		var form = document.getElementById("insertform");
		form.style.display = "none";
		refreshTableContent();
		if(stuff.capacity < stuff.numberOfStuff()){
			alert("Capacity exceeded!");
		}
	}
}


/**
 * Determines if the input is an integer
 *
 * @param x the value to be processed
 * @return True if x is a valid int, False otherwise.
 */
function isInt(x){
	return !isNaN(parseInt(x));
}

/**
 * Determines if the input is a positive int.
 *
 * @param x the value to be processed
 * @return True if x is a positive int, False otherwise.
 */
function isPositiveInt(x){
	return isInt(x) && parseInt(x)>0;
}

/**
 * Updates the value displayed in the table, with the values stored in the variable 'stuff'
 * it's called after each insertion
 */
function refreshTableContent(){
	var table = document.getElementById("table");
	var table_length = table.rows[0].cells.length;
	//same length between the stuff actually stored and shown -> increase of an existing item
	if (table_length == stuff.names.length) {
		var row = table.rows[1];
		for(var i=0;i<stuff.quantities.length;i++){
			row.cells[i].innerHTML = stuff.quantities[i];
		}
	} 
	//new item added
	else if(table_length == stuff.names.length-1) {
		var namesrow = table.rows[0];
		var quantityrow = table.rows[1];
		var length = namesrow.length;
		var newname = namesrow.insertCell(namesrow.cells.length);
		var newquantity = quantityrow.insertCell(quantityrow.cells.length);
		newname.innerHTML = stuff.names[stuff.names.length-1];
		newquantity.innerHTML = stuff.quantities[stuff.quantities.length-1];
	}
	//this should never happen
	else{
		alert("Something went wrong",table_length);
	}
}

/**
 * if the value contained in the input(identified by idval) isn't a positive integer,
 * the error message(identified by iderr) is shown, otherwise gets hidden
 *
 * @param idval the id (html) of the <input> to be checked
 * @param iderr the id (html) of the <p> containing the error message related to the input
 */
function checkPosIntValue(idval,iderr){
	var elem = document.getElementById(idval);
	var error = document.getElementById(iderr)
	error.style.display = isPositiveInt(elem.value)?"none":"block";
}

/**
 * Checks if the capacity to update is a valid value
 * if so, the capacity is updated
 */
function setCapacityValue(){
	var capacity = document.getElementById("capacity");
	if(isPositiveInt(capacity.value)){
		stuff.capacity = parseInt(capacity.value);
	}
}