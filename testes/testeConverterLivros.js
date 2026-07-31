import { dadosLivros, converterLivros } from "../dadosLivros.js";

// Isso é só para testar o funcionamento de funções
function testeConversaoDeLivros() {
    console.log(dadosLivros);
    converterLivros();

    // Os atributos vão ficar privados, então isso não vai retornar nada:
    console.log(dadosLivros);

    // E isso vai:
    dadosLivros.forEach((livro) => {
        console.log(livro.getInfo(), "\n");
    });

    // Confirmando que os objetos realmente ganharam os métodos
    // já que eles não aparecem quando printa no console
    console.log(dadosLivros[0].getAutor());
}

testeConversaoDeLivros();
