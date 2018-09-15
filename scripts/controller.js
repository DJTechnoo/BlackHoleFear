window.addEventListener("keydown", keydownHandler);
window.addEventListener("keyup", keydownHandler);

function controller(){
	this.left = false;
	this.right = false;
	this.up = false;
	this.down = false;
};

function keydownHandler(evt){
	var state = (evt.type == "keydown")? true:false;
	switch(evt.keyCode){
		case 65:
		case 37: controller.left  = state; break;
		case 87:
		case 38: controller.up    = state; break;
		case 68:
		case 39: controller.right = state; break;
		case 83:
		case 40: controller.down  = state; break;
	}
	evt.preventDefault();
}