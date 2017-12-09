(function(){

	var width = 40;
	var height = 40;
	var cont = 0;
	var map = [
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
	];

	class Random{
		static get(inicio,final){
			return Math.floor(Math.random() * final) + inicio;
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
		constructor(pos,time){
			this.pos = pos;
			this.back = null;
			this.vel = 1;
			this.timeLife = time;
			this.draw();
			this.id = cont;
			cont++;
		}
		draw(){
			contexto.fillRect(this.pos.x*10,this.pos.y*10,10,10);
			//contexto.fillText(""+this.timeLife,this.pos.x*10,this.pos.y*10);
			//contexto.fillText(""+this.id,this.pos.x*10,this.pos.y*10);
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
		getTimeLife(){
			return this.timeLife;
		}
		lifeDown(){
			//console.log('ID: '+this.id+' TIMELIFE: '+this.timeLife);
			this.timeLife--;
		}
	}

	class BugList{
		constructor(){
			this.bugs = [];
			this.longitud = 0;
		}
		addBug(i,j){
			if(this.longitud < width*height){
				this.bugs.push(new Square(new Posicion(i,j),50));
				this.longitud = this.bugs.length;	
			}
		}
		getBugByPos(i,j){
			for(var m=0;m<this.longitud;m++){
				if(this.bugs[m].getPos().equals(new Posicion(i,j))){
					return this.bugs[m];
				}
			}
			return null;
		}
		deleteBugFromList(){
			for(var m=0;m<this.longitud;m++){
				if(this.bugs[m].getTimeLife()<=0){
					map[this.bugs[m].getPos().x][this.bugs[m].getPos().y] = 0;
					this.bugs.splice(m,1);
					this.longitud = this.bugs.length;
				}
			}	
		}
		setTimeDown(){
			for(var m=0;m<this.longitud;m++){
				this.bugs[m].lifeDown();
			}	
		}
		draw(){
			for(var m=0;m<this.longitud;m++){
				if(typeof this.bugs[m] !== 'undefined'){
					if(this.bugs[m].getTimeLife()!==0){
						this.bugs[m].draw();
					}
				}
			}
		}
	}

	class BugWorld{
		constructor(){
			this.isPaused = false;
			this.bugList = new BugList();
			this.i = Random.get(0,width);
			this.j = Random.get(0,height);
			this.bugList.addBug(this.i,this.j);
			map[this.i][this.j] = 1;
			this.bugList.draw();
		}
		pauseGame(){
			this.isPaused = !this.isPaused;
		}
		upgradeVel(){
			
		}
		verifySelfColision(){
			
		}
		draw(){
			this.bugList.draw();
		}
		gameLoop(){
			//console.log('LONGITUD: '+this.bugList.longitud);
			if(!this.isPaused){
				for(var m=0;m<width;m++){
					for(var n=0;n<height;n++){

						if(this.bugList.getBugByPos(m,n)!==null){
							
							if(this.bugList.getBugByPos(m,n).getTimeLife()>0){
								
								var cont_popu = 0;
								if(m>1 && m<width-1){
									for(var x=m-1;x<=m+1;x++){
										
										if(n>1 && n<height-1){
											for(var y=n-1;y<=n+1;y++){
												
												if(m!==x || n!==y){
													if(map[x][y]!==0){
														cont_popu++;
													}
												}
											}
										}
									}
								}
								//console.log('Cercanos: '+cont_popu);
								if(cont_popu>4 || cont_popu===0){
									//buscar el cuadro x su id
									// y restarle tiempo de vida
									this.bugList.getBugByPos(m,n).lifeDown();
								}else{
									//generar un nuevo cuadro en la proximidad vacia immediata
									this.generateElement();
								}

							}
							
						}
					}
				}
				this.bugList.setTimeDown();
				this.bugList.deleteBugFromList();
				var nuevo = Random.get(0,10);
				if(nuevo>=4 && nuevo<=7){
					//console.log('Se genero un elemento espontaneo');
					this.generateElement();
				}
			}
		}
		generateElement(){
			do{
				this.i = Random.get(0,width);	
				this.j = Random.get(0,height); 
			}while(map[this.i][this.j]!==0);
			this.bugList.addBug(this.i,this.j);
			map[this.i][this.j] = 1;
		}	
	}
	
	class Nucleo{
		constructor(){ 
			
		}
		loop(){
			setInterval(function(){
				contexto.clearRect(0,0,width*10,height*10);
				game.gameLoop();
				game.draw();
				},10000/divisor);
		}
		upVel(){
			divisor++;
		}
		downVel(){
			if(divisor>1){
				divisor--;
			}
		}
	}

	const canvas = document.getElementById('lienzo');
	const contexto = canvas.getContext('2d');
	const nucleo = new Nucleo();
	var divisor = 1;
	const game = new BugWorld();

	nucleo.loop();

	window.addEventListener("keydown",function(event){
		//console.log(event.keyCode)
		switch(event.keyCode){
			case 65:
				nucleo.downVel();
				nucleo.loop();
			break;
			case 68:
				nucleo.upVel();
				nucleo.loop();
			break;
			case 87:
				
			break;
			case 83:
				
			break;
			case 32:
				game.pauseGame();
			break;
				
		}
	});

})();