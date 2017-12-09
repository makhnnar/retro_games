(function(){

	const width = 60;
	const height = 45;

	var map = [
		[1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1],
		[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
		[0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
		[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0],
		[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
		[1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1],
		[0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0],
		[1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1],
		[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
	];

	class Random{
		static get(inicio,final){
			return Math.floor(Math.random() * final) + inicio;
		}
	}

	class Food{
		constructor(pos){
			this.pos = pos;
			this.timeLife = -1;
			this.draw();
		}
		generateNewPos(){
			this.pos.x = Random.get(0,width);
			this.pos.y = Random.get(0,height);
		}
		draw(){
			contexto.fillRect(this.pos.x*10,this.pos.y*10,10,10);
		}
		getPos(){
			if(typeof this.pos !== 'undefined'){
				return this.pos;
			}
			return null;
		}
	}

	class Posicion{
		constructor(x,y){
			this.x = x;
			this.y = y;
		}
		equals(pos){
			if(this.x===pos.x && this.y===pos.y){
				return true;
			}
			return false;
		}
	}

	class Square{
		constructor(pos){
			this.pos = pos;
			this.back = null;
			this.vel = 1;
			this.draw();
		}
		draw(){
			contexto.fillRect(this.pos.x*10,this.pos.y*10,10,10);
			if(this.hasBack()){
				this.back.draw();
			}
		}
		up(){
			this.copy();
			this.pos.y -= this.vel;
		}
		down(){
			this.copy();
			this.pos.y += this.vel;
		}
		left(){
			this.copy();
			this.pos.x -= this.vel;
		}
		right(){
			this.copy();
			this.pos.x += this.vel;
		}
		getPos(){
			if(typeof this.pos !== 'undefined'){
				return this.pos;
			}
			return null;
		}
		hasBack(){
			if(this.back===null){
				return false;
			}
			return true;
		}
		addBack(){
			if(this.hasBack()){
				this.back.addBack();
			}else{
				this.back = new Square(this.makePosCopy(this.pos));
			}
		}
		removeLastBack(){
			if(this.back.hasBack()){
				this.back.removeLastBack()
			}else{
				this.back = null;
			}	
		}
		copy(){
			if(this.hasBack()){
				this.back.copy();
				this.back.pos = this.makePosCopy(this.pos);
			}
		}
		upVel(){
			this.vel++;
			if(this.hasBack()){
				this.back.upVel();
			}
		}
		downVel(){
			this.vel--;
			if(this.hasBack()){
				this.back.downVel();
			}
		}
		makePosCopy(pos){
			return new Posicion(pos.x,pos.y);
		}
		colission(pos){
			if(this.pos.equals(pos)){
				return true
			}
			else{
				if(this.hasBack()){
					return this.back.colission(pos);
				}
				else{
					return false;
				}
			}
		}
	}

	class Snake{
		constructor(){
			this.head = new Square(new Posicion(10,3));
			this.draw();
			this.direction = "right";
		}
		addSquare(){
			this.head.addBack();
		}
		subSquare(){
			this.head.removeLastBack();
		}
		draw(){
			if(typeof this.head !== 'undefined'){
				this.head.draw();
			}
		}
		up(){
			this.direction = "up";
		}
		down(){
			this.direction = "down";
		}
		left(){
			this.direction = "left";
		}
		right(){
			this.direction = "right";
		}
		move(){
			switch(this.direction){
				case "up":
					this.head.up();
				break;
				case "down":
					this.head.down();
				break;
				case "left":
					this.head.left();
				break;
				case "right":
					this.head.right();
				break;
			}
		}
		getHead(){
			if(typeof this.head !== 'undefined'){
				return this.head;
			}
			return null;
		}
		upgradeVel(){
			this.head.upVel();
		}
		verifySelfColision(){
			if(this.head.hasBack()){
				return this.head.back.colission(this.head.getPos());
			}
			return false;	
		}
	}

	class Game{
		constructor(){
			this.initLong = 3;
			this.snake = new Snake();
			this.food = new Food(new Posicion(Random.get(0,width),Random.get(0,height)));
			this.isPaused = false;
			this.draw();
			this.initSnake();
		}
		initSnake(){
			for(var i=0;i<this.initLong;i++){
				this.snake.addSquare();
			}
		}
		draw(){
			if(typeof this.snake !== 'undefined')
				this.snake.draw();
			if(typeof this.food !== 'undefined')
				this.food.draw();

		}
		pauseGame(){
			this.isPaused = !this.isPaused;
		}
		gameLogic(){
			if(!this.isPaused){
				this.snake.move();
				if(this.snake.getHead().getPos().equals(this.food.getPos())){
					this.snake.addSquare();
					this.food.generateNewPos();
				}
				if(
					this.snake.getHead().getPos().x>width || 
					this.snake.getHead().getPos().y>height ||
					this.snake.getHead().getPos().x< 0 || 
					this.snake.getHead().getPos().y< 0 ||
					this.snake.verifySelfColision()
				){
					this.snake = null;
					this.snake = new Snake();
					this.initSnake()
					this.isPaused = true;
				}
			}
			//preguntar por la colision consigo misma
		}
	}

	const canvas = document.getElementById('lienzo');
	const contexto = canvas.getContext('2d');
	const game = new Game();

	window.addEventListener("keydown",function(event){
		//console.log(event.keyCode)
		switch(event.keyCode){
			case 65:
				game.snake.left();
			break;
			case 68:
				game.snake.right();
			break;
			case 87:
				game.snake.up();
			break;
			case 83:
				game.snake.down();
			break;
			case 32:
				game.pauseGame();
			break;
				
		}
	});

	setInterval(function(){
		contexto.clearRect(0,0,canvas.width,canvas.height);
		game.gameLogic();
		game.draw();
	},1000/5);

})();