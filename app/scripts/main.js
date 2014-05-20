
// Defining the constructor function called Hero. 
// The capital H indicates this is a constructor.
// "this" refers to the instantiated object which is, in this
// case steve.

function Hero () {

	this.strength = 10;
	
	this.fuel = 10;
	this.swingAt = function(target){
		target.strength = target.strength - 1,
		
		this.fuel = this.fuel -1

	if (this.fuel < 8) {
		this.strength = this.strength -2
	} 
		
	}
}

$('.steve').click(function(){
 
  $('.showStatus').html("You swing and miss.");
  
})


function Enemy () {
	this.strength = 10;
	// this.speed = 10;
	this.fuel = 10;
	this.hit = function(Enemy){
		this.strength = this.strength + 1
	};
};

steve = new Hero();
frank = new Enemy();

// steve.hit(frank)
// console.log(frank);