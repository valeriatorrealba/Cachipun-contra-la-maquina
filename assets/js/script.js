function iniciarJuego(){
    var repetirJuego = parseInt(prompt("¿Cuantas veces quieres jugar?"));
    var contador = 0;
    var player = 0;
    var machine = 0;
    
    for (i=1; i <= repetirJuego; i++){
        var jugada = parseInt(prompt("Ingresa un Número dependiendo de tú elección (0)Piedra, (1)Papel o (2)Tijera"));
        var maquina = Math.floor(Math.random()*3);
        //Valores de máquina
        // 0 Piedra
        // 1 Papel
        // 2 Tijera
        if(jugada > maquina){
            alert("Jugador Ganó");
            document.write(`<p>Jugador ${jugada} y Máquina ${maquina}, el ganador es: Jugador</p>`);
            player ++;
        }else if(jugada < maquina){
                alert("Máquina Ganó");
                document.write(`<p>Jugador ${jugada} y Máquina ${maquina}, el ganador es: Máquina</p>`);
                machine ++;            
            }else if (jugada == maquina){
                alert("Es un empate");
                document.write(`<p>Jugador ${jugada} y Máquina ${maquina}, Es un Empate</p>`);
            }
            contador ++;
    }
    if(player > machine){
        document.write(`<p>Resultado Final: "Felicidades al ganador"</p>`);
    }else if(player < machine){
        document.write(`<p>Resultado Final: "Haz Perdido contra Máquina"</p>`);
    }else if(player == machine){
        document.write(`<p>Resultado Final: "Es un empate"</p>`);
    }
}












// var piedra = 0;
// var papel = 1;
// var tijera = 2;

// function ganador(piedra, papel, tijera ){
    

// }