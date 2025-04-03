function campoMinado(){

let rodada = 1;
let venceu = false; 

while (rodada <= 5) {
    console.log("Rodada: " + rodada);

    let numEscolhido;

    do {
        numEscolhido = parseInt(prompt("Nível " + rodada + ", escolha um caminho (1, 2 ou 3)?"));
        if (numEscolhido < 1 || numEscolhido > 3 || isNaN(numEscolhido)) {
            alert("Escolha inválida! Escolha apenas entre 1, 2 ou 3.");
        }
    } while (numEscolhido < 1 || numEscolhido > 3 || isNaN(numEscolhido));

    let mina = Math.floor(Math.random() * 3) + 1;

    if (numEscolhido === mina) {
        alert("Você pisou na mina! Acabou o jogo para você.");
        venceu = false; // O jogador perdeu
        break; // Encerra o loop
    } else {
        alert("Passou! A mina estava no caminho: " + mina);
    }

    rodada++;
}

// Se o jogador passou por todas as rodadas, ele venceu
if (rodada > 5) {
    venceu = true;
    alert("Parabéns! Você atravessou o campo minado.");
}

console.log("Resultado final: " + (venceu ? "Vitória!" : "Derrota!"));

}
