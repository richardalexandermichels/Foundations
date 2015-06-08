function Vehicle(licensePlate, color){
	this.licensePlate = licensePlate;
	this.color = color;
}

Vehicle.prototype.beep = function(){
	return "BEEP, BEEP"
}

Vehicle.prototype.changeColor = function(color){
	this.color = color;
}

var Truck = function(licensePlate, color, transmission){
	Vehicle.call(this,licensePlate,color);
	this.transmission = transmission
}

Truck.prototype = Object.create(Vehicle.prototype);
Truck.prototype.constructor = Truck;


