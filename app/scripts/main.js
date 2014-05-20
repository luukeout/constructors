
// Defining the constructor function called Hero. 
// The capital H indicates this is a constructor.
// "this." refers to the instantiated object which is, in this,
// case steve.

function Hero () {
// This.strength and this.fuel are setting the defualt properties 
// of every hero. Below I created a hero named steve. That is an 
// "instance" of my constructor object Hero. 
	this.strength = 10;
	
	this.fuel = 10;
// This.swingAt is another property, but it's value is a function.
// When I use .swingAt with a target passed into the parentheses
// that target's strength is decreased by one. At the same time
// "this.fuel" which is the Hero's fuel is also decreased by one. 
	this.swingAt = function(target){
		target.strength = target.strength - 1,
		
		this.fuel = this.fuel -1

// "If" the hero's fuel, denoted by "this", drops below 8 the 
// the hero's strength will then also decrease by two.
	if (this.fuel < 8) {
		this.strength = this.strength -2
	} 
		
	}
}

// Here I was trying to get information to display when you 
// click the "steve" button.
$('.steve').click(function(){
 
  $('.showStatus').html("You swing and miss.");
  
})

// Here I'm defining the Enemy constructor. Same as above with 
// the hero constructor. 
function Enemy () {
	this.strength = 10;
	// this.speed = 10;
	this.fuel = 10;
// In this case when the Enemy uses the .hit property his own strength
// is incresed by one. He gets worse the more he fights.
	this.hit = function(Enemy){
		this.strength = this.strength + 1
	};
};

// This is where I create an instance of my constructors. steve and frank 
// are instances of the Hero and Enemy constructors. They are new objects
// that come equiped with all the properties of the constructor.
steve = new Hero();
frank = new Enemy();

// steve.swingAt(frank)
// console.log(frank);