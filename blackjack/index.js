var IncrementarApuesta=0;
var DineroDisponibleJP1=100;
var DineroApostadoJP1=0;
var turnoApuestaJP1=0;
var contadorRondas=1;
var turnoApuestaJP2=0;
var AcumApuesta;
var cartaGenerada;
var cursoJuego=true;
var detenerseJP1=true;
document.getElementById('PujaInicial').innerHTML='La puja inicial de tu oponente es de 2$';
var Apuesta;
var elegirturno;
var ApostarMas;
(function(){
	Apuesta=document.getElementById('Apuesta');
	Apuesta.showModal();
})();

var iniciarJuego=function(){
	var IncrementarApuesta = document.getElementById('IncrementarApuesta').value;
	Apuesta.close();
	elegirturno=document.getElementById('turno');
	elegirturno.showModal();
	if (IncrementarApuesta>2&&IncrementarApuesta-100){
		DineroApostadoJP1=IncrementarApuesta;
		DineroDisponibleJP1=DineroDisponibleJP1 - DineroApostadoJP1;		
		document.getElementById('DineroApostado').innerHTML="Dinero Apostado: "+DineroApostadoJP1;
		document.getElementById('DineroDisponible').innerHTML="Dinero Disponible: "+DineroDisponibleJP1;
		AcumApuesta=IncrementarApuesta*2;
		document.getElementById('Monto a ganar').innerHTML="Monto a ganar: "+AcumApuesta
	}else{
		DineroApostadoJP1=2;
		DineroDisponibleJP1=DineroDisponibleJP1 - DineroApostadoJP1;
		document.getElementById('DineroApostado').innerHTML="Dinero Apostado: "+DineroApostadoJP1;
		document.getElementById('DineroDisponible').innerHTML="Dinero Disponible: "+DineroDisponibleJP1;
		AcumApuesta=DineroApostadoJP1*2;
		document.getElementById('Monto a ganar').innerHTML="Monto a ganar: "+AcumApuesta;		
	}
	for (var k = 0; k < 2; k++){
		cartaJP1=generarCarta();
		urlCarta = './cartas/'+cartaJP1.pinta+'/'+cartaJP1.numero+'.jpg';	
		cartaslanzadas.push(cartaJP1);
		cartaslanzadasJP1.push(cartaJP1);
		var valorCartaJP1=cartaJP1.numero;
		if (valorCartaJP1===1) {
			valorCartaJP1=10;
		 }
		AcumSumCartasJP1=AcumSumCartasJP1+valorCartaJP1;
		AcumCartasJP1 = AcumCartasJP1 +"<img src=\""+urlCarta+"\" id=\"carta\">";
		document.getElementById('body1').innerHTML = AcumCartasJP1;
		document.getElementById('ver1').innerHTML = AcumSumCartasJP1;

		cartaCPU=generarCarta();
		cartaslanzadas.push(cartaCPU);
		cartaslanzadasJP2.push(cartaCPU);
		urlCartaCPU = './cartas/'+cartaCPU.pinta+'/'+cartaCPU.numero+'.jpg';
		var valorCartaJP2=cartaCPU.numero;
		if (valorCartaJP2===1) {
			valorCartaJP2=10;
		 }
		AcumSumCartasJP2=AcumSumCartasJP2+valorCartaJP2;
		if (k>0) {
			AcumCartasJP2 = AcumCartasJP2 +	"<img src=\""+'./cartas/tapada.jpg'+"\" id=\"carta\">";
		}else{
			AcumCartasJP2 = AcumCartasJP2 +"<img src=\""+urlCartaCPU+"\" id=\"carta\">";
		}

		document.getElementById('body').innerHTML = AcumCartasJP2;
		document.getElementById('ver').innerHTML = AcumSumCartasJP2;
	}
}

var turnoUsuario1=0;
var turnoUsuario2=0;
var AsigTurno=1;

var Cara=function(){
	turnoUsuario1=1;
	turnoUsuario2=2;
	AsigTurno=Math.trunc(Math.random()*2+1);
	if (AsigTurno===turnoUsuario1) {
		document.getElementById('turnoJugador').innerHTML='Turno del jugador 1';
		turno=turnoUsuario1
	}else{
		document.getElementById('turnoJugador').innerHTML='Turno del jugador 2';
		turno=turnoUsuario2;
	}
	if (turno===turnoUsuario2) {
		setTimeout(function(){AI();}, 5000);
	}
	elegirturno.close();
}
	
var Sello=function(){
 	turnoUsuario1=2;
	turnoUsuario2=1;
	AsigTurno=Math.trunc(Math.random()*2+1);
	if (AsigTurno===turnoUsuario1) {
		turno=turnoUsuario2;
		document.getElementById('turnoJugador').innerHTML='Turno del jugador 2';
	}else{
		turno=turnoUsuario1
		document.getElementById('turnoJugador').innerHTML='Turno del jugador 1';
	}
	if (turno===turnoUsuario2) {
		setTimeout(function(){AI();}, 5000);
	}
	elegirturno.close();
}

var generarCarta = function(){
	var salir = false;	
	while(!salir){
		var carta={};
		//generamos la carta0
		numeroCartaJP1=Math.trunc(Math.random()*12+1);
		pintaCartaJP1=Math.trunc(Math.random()*4+1);
   		carta = {
			pinta:pintaCartaJP1,
			numero:numeroCartaJP1
		};
		var i=0;
   		//buscamos si existe la carta
   		var band = false;
		while( i < cartaslanzadas.length && band===false) {
			//console.log('nueva ---> {'+carta.pinta+', '+carta.numero+'} arreglo ---> {'+cartaslanzadas[i].pinta+', '+cartaslanzadas[i].numero+'}');
			if (
				cartaslanzadas[i].pinta===carta.pinta&&
				cartaslanzadas[i].numero===carta.numero
			) {
				band=true;
			}
			i++;
		}
		//preguntamos sino existe la carte previamente(carta unica, no se repite)
		if(!band){
			//salimos del primer while
			salir = true;
		}
 	}
 	return carta;
}

var urlCarta;
var AcumCartasJP1="";
var AcumSumCartasJP1=0;
var cartaslanzadas=[];
var cartaslanzadasJP1=[];
var cartaJP1 = {};

var pedirCartaPlayer=function(){
	if (turno===turnoUsuario1){
	 	cartaGenerada=generarCarta();

	   	cartaslanzadas.push(cartaGenerada);
	   	cartaslanzadasJP1.push(cartaGenerada);

		urlCarta = './cartas/'+cartaGenerada.pinta+'/'+cartaGenerada.numero+'.jpg';
		AcumCartasJP1 = AcumCartasJP1 +"<img src=\""+urlCarta+"\" id=\"carta\">";
		document.getElementById('body1').innerHTML=AcumCartasJP1;
		valorCartaJP1=cartaGenerada.numero;
		if (valorCartaJP1===1) {
			valorCartaJP1=10;
		}
		AcumSumCartasJP1=AcumSumCartasJP1+valorCartaJP1;
		document.getElementById('ver1').innerHTML=AcumSumCartasJP1;
		contadorRondas++;
	}
}

var PasarTurnoCPU=function(){
	turno=turnoUsuario2;
	document.getElementById('turnoJugador').innerHTML='Turno del jugador 2';
	setTimeout(function(){AI();}, 5000);
}

var NoPedirPlayer=function(){
	turno=turnoUsuario2;
	detenerseJP1=false;
}

var NoPedirCPU=function(){
	turno=turnoUsuario1;
}

var urlCartaCPU;
var AcumCartasJP2="";
var AcumSumCartasJP2=0;
var cartaslanzadasJP2=[];
var cartaCPU = {};

var pedirCartaCPU = function(){
	if (turno===turnoUsuario2){
	   	cartaGenerada=generarCarta();

	   	cartaslanzadas.push(cartaGenerada);
		cartaslanzadasJP2.push(cartaGenerada);

	   	urlCarta = './cartas/'+cartaGenerada.pinta+'/'+cartaGenerada.numero+'.jpg';
		AcumCartasJP2 = AcumCartasJP2 +"<img src=\""+'./cartas/tapada.jpg'+"\" id=\"carta\">";
		document.getElementById('body').innerHTML=AcumCartasJP2;
		valorCartaJP2=cartaGenerada.numero;
		if (valorCartaJP2===1) {
			valorCartaJP2=10;
		}
		AcumSumCartasJP2=AcumSumCartasJP2+valorCartaJP2;
		document.getElementById('ver').innerHTML=AcumSumCartasJP2;
	}  
}

var AI = function(){
	if (contadorRondas===1&&detenerseJP1===false&&cartaslanzadasJP1[0].numero>=10||cartaslanzadasJP1[0].numero===1){
		setTimeout(function(){
			alert('Jugador Gana');
			document.location.href = document.location.href;
		}, 4000);
		
	}else{
		if (AcumSumCartasJP2<17){
			pedirCartaCPU();
		}

		if (turnoApuestaJP2<2) {
			if (AcumSumCartasJP2>=17&&AcumSumCartasJP2<21){
				DineroApostadoJP1=DineroApostadoJP1*2;
				DineroDisponibleJP1=DineroDisponibleJP1 - DineroApostadoJP1;		
				document.getElementById('DineroApostado').innerHTML="Dinero Apostado: "+DineroApostadoJP1;
				document.getElementById('DineroDisponible').innerHTML="Dinero Disponible: "+DineroDisponibleJP1;
				AcumApuesta=DineroApostadoJP1*2;
				document.getElementById('Monto a ganar').innerHTML="Monto a ganar: "+AcumApuesta
				turnoApuestaJP2++;
			}
		}
	}
	turno=turnoUsuario1;
	document.getElementById('turnoJugador').innerHTML='Turno del jugador 1';
}

var incrementarApuesta=function(){
	if (turno===turnoUsuario1){
		ApostarMas=document.getElementById('ApostarMas');
		ApostarMas.showModal();
	}
}

var aumentarApuesta=function(){
	var montodeapuesta=document.getElementById('AumentarApuesta').value;
	if (turnoApuestaJP1<2) {
		if (montodeapuesta>DineroApostadoJP1) {
			DineroApostadoJP1=montodeapuesta;
			DineroDisponibleJP1= 100 - montodeapuesta;		
			document.getElementById('DineroApostado').innerHTML="Dinero Apostado: "+DineroApostadoJP1;
			document.getElementById('DineroDisponible').innerHTML="Dinero Disponible: "+DineroDisponibleJP1;
			AcumApuesta=montodeapuesta*2;
			document.getElementById('Monto a ganar').innerHTML="Monto a ganar: "+AcumApuesta;
			turnoApuestaJP1++;
		}
	}
	ApostarMas.close();
} 

var rechazar=function(){
	ApostarMas.close();
}

var mostrar=function(){
	var AcumCartasJP2="";
	for (var m = 0; m < cartaslanzadasJP2.length; m++) {
		urlCarta = './cartas/'+cartaslanzadasJP2[m].pinta+'/'+cartaslanzadasJP2[m].numero+'.jpg';
		AcumCartasJP2 = AcumCartasJP2 +"<img src=\""+urlCarta+"\" id=\"carta\">";
		console.log(AcumCartasJP2)
	}
	document.getElementById('body').innerHTML=AcumCartasJP2;

	if (turno===turnoUsuario1){
		if (AcumSumCartasJP1===AcumSumCartasJP2){
			if (AcumCartasJP1<AcumCartasJP2){
				setTimeout(function(){
					alert('Jugador Gana');
					document.location.href = document.location.href;
				}, 4000);
				
			}else if (AcumCartasJP2<AcumCartasJP1){
				setTimeout(function(){
					alert('CPU Gana');
					document.location.href = document.location.href;
				}, 4000);
				
			}else{
				setTimeout(function(){
					alert('Empate');
					document.location.href = document.location.href;
				}, 4000);
				
			}
		}else if (AcumSumCartasJP1>AcumSumCartasJP2){
	 		if (AcumSumCartasJP1>21){
				setTimeout(function(){
					alert('CPU Gana');
					document.location.href = document.location.href;
				}, 4000);
				
			}else{
				setTimeout(function(){
					alert('Jugador Gana');
					document.location.href = document.location.href;
				}, 4000);
				
			}
		}else{
			if (AcumSumCartasJP2>21){
				setTimeout(function()
					{alert('Jugador Gana');
					document.location.href = document.location.href;
				}, 4000);
				
			}else{
				setTimeout(function(){
					alert('CPU Gana');
					document.location.href = document.location.href;
				}, 4000);
				
			}
		}
	}
}