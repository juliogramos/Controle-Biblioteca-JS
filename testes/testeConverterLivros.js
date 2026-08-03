import { dadosLivros } from "../dadosLivros.js";

// Isso é só para testar o funcionamento de funções
function testeConversaoDeLivros() {
    // Os atributos são todos privados, então isso não vai retornar nada:
    console.log(dadosLivros);

    // E isso vai:
    dadosLivros.forEach((livro) => {
        console.log(livro.getInfo(), "\n");
    });
}

testeConversaoDeLivros();
