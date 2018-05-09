var JOQUEMPO = (function() {
    var escolhaJogador, escolhaComputador, vencedor, pontosJogador, pontosComputador;        
    alert("Olá :D Seja Bem Vindo ao meu joguinho. Espero que se divirta!");
    var setEscolhaJogador = function (escolha) {
        escolhaJogador = escolha;
    };
    var getEscolhaJogador = function () {
        return escolhaJogador;
    };
    var setEscolhaComputador = function (escolha) {
        escolhaComputador = escolha;
    };
    var getEscolhaComputador = function () {
        var escolhaComputador = Math.round(Math.random() * 2);
            if (escolhaComputador < 0.34) {
                escolhaComputador = "pedra";
            } 
            else if (escolhaComputador <= 0.67) {
                escolhaComputador = "papel";
            } 
            else {
                escolhaComputador = "tesoura";
            }
        setEscolhaComputador(escolhaComputador);
        return escolhaComputador;
    };
    var getVencedor = function () {
        if (escolhaJogador == 'pedra') {
            if (escolhaComputador == 'pedra') {
                vencedor = 'empate';
            } 
            else if (escolhaComputador == 'papel') {
                vencedor = 'computador';
            } 
            else if (escolhaComputador == 'tesoura') {
                vencedor = 'jogador';
            }
        } else if (escolhaJogador == 'papel') {
            if (escolhaComputador == 'pedra') {
                vencedor = 'jogador';
            } 
            else if (escolhaComputador == 'papel') {
                vencedor = 'empate';
            } 
            else if (escolhaComputador == 'tesoura') {
                vencedor = 'computador';
            }
        } else if (escolhaJogador == 'tesoura') {
            if (escolhaComputador == 'pedra') {
                vencedor = 'computador';
            } 
            else if (escolhaComputador == 'papel') {
                vencedor = 'jogador';
            } 
            else if (escolhaComputador == 'tesoura') {
                vencedor = 'empate';
            }
        } 
        if (vencedor == 'jogador') {
            if (getPontosJogador() != null) {
            	setPontosJogador(getPontosJogador() + 1);	
            } 
            else {
            	setPontosJogador(1);
            }            
        } else if (vencedor == 'computador') {
        	if (getPontosComputador() != null) {
            	setPontosComputador(getPontosComputador() + 1);	
            } 
            else {
            	setPontosComputador(1);
            } 
        }   
        return vencedor;
    };    
    var getPontosComputador = function () {
    	return pontosComputador;
    };    
    var setPontosComputador = function  (pontos) {
    	pontosComputador = pontos;
    };    
    var getPontosJogador = function  () {
    	return pontosJogador;
    };    
    var setPontosJogador = function  (pontos) {
    	pontosJogador = pontos;
    };
    return {
        setEscolhaJogador : setEscolhaJogador,
        getEscolhaComputador : getEscolhaComputador,
        getVencedor : getVencedor,
        setPontosComputador: setPontosComputador,
		setPontosJogador: setPontosJogador,
        getPontosComputador: getPontosComputador,
		getPontosJogador: getPontosJogador
    };
})();
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
(function(){
    JOQUEMPO.setPontosComputador(0);
    JOQUEMPO.setPontosJogador(0);
    document.getElementById("play").onclick = function () {
        var escolhaJogador = document.getElementById("opcaojogador").value;        
        if (escolhaJogador == '') {
            alert('Por favor escolha uma opção');
            return false;
        }        
        document.getElementById("cmpjogador").innerHTML = capitalizeFirstLetter(escolhaJogador);
        JOQUEMPO.setEscolhaJogador(escolhaJogador);
        document.getElementById("cmpcomputador").innerHTML = capitalizeFirstLetter(JOQUEMPO.getEscolhaComputador());
        document.getElementById("cmpvencedor").innerHTML = capitalizeFirstLetter(JOQUEMPO.getVencedor());
		document.getElementById("placarjogador").value = JOQUEMPO.getPontosJogador();
        document.getElementById("placarcomputador").value =  JOQUEMPO.getPontosComputador();
	};    
})();
