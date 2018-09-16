function Timer(t){
	this.time = t;
	
	
	this.decrease = function(tx){
		this.time -= tx;
	}
	
	this.timeIsUp = function(){
		
		return (this.time <= 0);
	}
	
	
}