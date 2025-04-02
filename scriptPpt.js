function pptComecar() {
    //Código do jogo
        pptJogador = prompt("Digite 1-Pedra, 2-papel ou 3-tesoura");
        pptComputador = Math.floor(Math.random() * 3) + 1;
        console.log("A escolha do computador foi: " + pptComputador)

        //Em caso de empate
        //Jogador Papel, Computador Papel --> Empate
        //Jogador Pedra, Computador Pedra --> Empate
        //Jogador Tesoura, Computador Tesoura --> Empate

        if (pptJogador == pptComputador) {
            alert("Empate");
        }

        //Casos de Pedra

        if (pptJogador == 1){
            if (pptComputador == 2){
                //Jogador Pedra, Computador Papel --> Computador Vence    
                alert("Computador venceu, Computador escolheu papel");
            }
            if(pptComputador == 3){
                //Jogador Pedra, Computador Tesoura --> Jogador Vence
                alert("Jogador venceu, Computador escolheu tesoura")
            }
        }

        //Casos de Papel

        if (pptJogador == 2){
            if (pptComputador == 3){
                //Jogador Papel, Computador Tesoura --> Computador Vence    
                alert("Computador venceu, Computador escolheu tesoura");
            }
            if(pptComputador == 1){
                //Jogador Papel, Computador Pedra --> Jogador Vence
                alert("Jogador venceu, Computador escolheu pedra")
            }
        }

        //Casos de Tesoura

        if(pptJogador == 3){
            if (pptComputador == 1){
                //Jogador Tesoura, Computador Pedra --> Computador Vence
                alert("Computador venceu, Computador escolheu pedra");
            }
            if(pptComputador == 2){
                //Jogador Tesoura, Computador Papel --> Jogador Vence
                alert("Jogador venceu, Computador escolheu papel")
            }      
        }
}


