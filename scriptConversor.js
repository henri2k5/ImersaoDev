function Converter() {
    let valorReal = prompt(
        "Digite um valor em Reais"
    );

    let escolha = prompt(
        "Escolha para qual moeda deseja converter:\n1 - Won (KRW)\n2 - Dólar (USD)\n3 - Euro (EUR)\n4 - Iene (JPY)"
    );

    let taxaConversao;
    let moeda;

    switch (escolha) {
        case "1":
            taxaConversao = 258; 
            moeda = "₩";
            break;
        case "2":
            taxaConversao = 0.18;
            moeda = "US$";
            break;
        case "3":
            taxaConversao = 0.16;
            moeda = "€";
            break;
        case "4":
            taxaConversao = 26;
            moeda = "¥";
            break;
        default:
            alert("Opção inválida! Tente novamente.");
            return;
    }

    let Resultado = valorReal * taxaConversao;
    alert(moeda + " " + Resultado.toLocaleString(2));
}
