var Car = function(x, y, name) {
	this.name = name;
	this.x = x;
	this.y = y;
	this.speed = 5;
	this.draw();
};

Car.prototype.draw = function() {
	var carHtml = '<img src="http://nostarch.com/images/car.png" alt="car">';
	this.carElement = $(carHtml);

	this.carElement.css({
		position:'absolute',
		left:this.x,
		top:this.y,
	});
	$('body').append(this.carElement);
};

Car.prototype.moveRight = function(speed) {
	
	if (this.x >= 800) {
		$('body').append('<h1>'+this.name+' is winner!</h1>');
		clearInterval(driveTesla);
		clearInterval(driveNussan);
	}
	this.x += speed;
	this.carElement.css({
		left:this.x,
		top:this.y,
	});
};

Car.prototype.moveLeft = function(speed) {
	this.x -= speed;
	this.carElement.css({
		left:this.x,
		top:this.y,
	});
};

Car.prototype.moveUp = function(speed) {
	this.y -= speed;
	this.carElement.css({
		left:this.x,
		top:this.y,
	});
};

Car.prototype.moveDown = function(speed) {
	this.y += speed;
	this.carElement.css({
		left:this.x,
		top:this.y,
	});
};


var tesla = new Car(10, 20, 'Tesla');
var nissan = new Car(10, 200, 'Nissan');
var driveTesla = setInterval(() => tesla.moveRight(Math.floor(Math.random() * 10)), 30);
var driveNussan = setInterval(() => nissan.moveRight(Math.floor(Math.random() * 10)), 30);