import { dadosLivros, converterLivros } from "./dadosLivros.js";

// Isso é só para testar o funcionamento de funções
function testeConversaoDeLivros() {
    console.log(dadosLivros);
    converterLivros();
    console.log(dadosLivros);

    // Confirmando que os objetos realmente ganharam os métodos
    // já que eles não aparecem quando printa no console
    console.log(dadosLivros[0].getAutor());
}

// Essa vai ser a função com o loop principal do programa
// Vazia por enquanto até implementar o menu
function main() {}

// main()

testeConversaoDeLivros();
