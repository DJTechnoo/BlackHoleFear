function Score(){
	
	this.score = 0;
	this.level = 1;
	this.gameOver = false;
	
	this.addScore = function(m){
		this.score += floor(100 * m/10.0);
		
	}
	
	this.display = function(){
		
		fill(0);
		textSize(24);
		textStyle(BOLD);
		
		textFont('Comic Sans MS');
		
		
		text('Score: ' + this.score, 12, 30);
		text("Level: " + this.level, 900, 30);
		if(this.gameOver) text("GAME OVER", WIDTH/2, HEIGHT/2);
		
		
			
	}
	
	
}