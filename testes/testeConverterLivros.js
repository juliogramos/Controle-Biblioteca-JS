import { dadosLivros, converterLivros } from "../dadosLivros.js";

// Isso é só para testar o funcionamento de funções
function testeConversaoDeLivros() {
    console.log(dadosLivros);
    converterLivros();
    console.log(dadosLivros);

    // Confirmando que os objetos realmente ganharam os métodos
    // já que eles não aparecem quando printa no console
    console.log(dadosLivros[0].getAutor());
}

testeConversaoDeLivros();
