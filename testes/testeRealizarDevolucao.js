import { dadosLivros, converterLivros } from "../dadosLivros.js";
import { realizarDevolucao } from "../realizarDevolucao.js";

function testeRealizarDevolucao() {
    // Conversão inicial
    converterLivros();

    // Mostra livros disponíveis inicialmente
    dadosLivros.forEach((livro) => {
        console.log(livro.getInfo(), "\n");
    });

    // Escolhi o segundo livro, CSS Moderno
    // Acessado com dadosLivros[1]
    console.log(dadosLivros[1].getInfo());

    // Faz a devolução de CSS Moderno
    // A própria função converte o input para maiúsculo
    // então o usuário não precisa digitar em maiúsculo
    realizarDevolucao("css moderno");

    // Verifica que disponivel foi para true
    console.log(
        "Disponível foi para true?",
        dadosLivros[2].getDisponivel() == true,
    );

    // Tenta realizar o empréstimo de um livro que já está disponível
    // O comportamento é meio estranho, mas é o que tá no enunciado
    realizarDevolucao("React para web");

    // Tenta realizar devolução de um livro que não existe
    realizarDevolucao("Livro que não existe");
}

testeRealizarDevolucao();
