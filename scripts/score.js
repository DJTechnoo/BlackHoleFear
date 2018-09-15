function Score(){
	
	this.score = 0;
	
	this.addScore = function(m){
		this.score += floor(100 * m/10.0);
		
	}
	
	this.display = function(){
		
		// display text
		console.log(this.score);
		
	}
	
	
}