function caboGuerra(){

//Criar uma lista de 3 jogadores
personagens = ["","",""]
viloes = ["","",""]

forcaP = 0
forcaV = 0

for (let i = 0; i < 3; i++) {
  let escolhaP = "";
  
  /* o ".trim" Garante que o usuário insira um nome válido, removendo os espaçoes em branco antes e depois 
  do nome inserido, e também evita que caso o usuário não insira, isso não seja aceito */
  while (!escolhaP.trim()) {
      escolhaP = prompt("Digite o nome do seu personagem " + (i + 1)).trim();
      if (!escolhaP) {
          alert("Erro: O nome do personagem não pode estar vazio!");
      }
  }
  personagens[i] = escolhaP;
//Calcular a força de cada jogador. e somar para saber a força do time
  forcaP = forcaP + Math.floor(Math.random() * 10) + 1
  
}
console.log("O array personagem contém: " + personagens)
console.log("Inicio Viloes:"+ viloes )
for(let i=0; i<3; i++){
  indiceAleatorio = Math.floor(Math.random() * 25)
  viloesPossiveis = ["Thanos", "Loki", "Magneto", "Doutor Destino", "Ultron", "Duende Verde", "Rei do Crime", 
    "Caveira Vermelha", "Mysterio", "Venom", "Carnificina", "Apocalipse", "Sentinela", "Abutre", "Fanático", 
    "Senhor Sinistro", "Dentes-de-Sabre", "Electro", "Lagarto", "Barão Zemo", "Dormammu", "Mojo", "Modok", 
    "Kang, o Conquistador", "Mephisto"]
  viloes[i] = viloesPossiveis [indiceAleatorio]
  //Calcular a força de cada jogador do time do computador
  
  forcaV = forcaV + Math.floor(Math.random() * 10) + 1
  
}
console.log("Final Viloes:"+ viloes )

//Comparar os dois times para saber quem venceu

if (forcaP > forcaV){
  alert("Seu time é muito forte! Você ganhou a disputa de cabo de guerra! Sua força foi: " + forcaP)
}
else{
  if (forcaP < forcaV){
  alert("Seu time é muito fraco! Você perdeu a disputa de cabo de guerra! A força do computador foi: " + forcaV)
}
  else{
    alert("Ambos os times tem a mesma força! Vocês empataram")
  }
}
}