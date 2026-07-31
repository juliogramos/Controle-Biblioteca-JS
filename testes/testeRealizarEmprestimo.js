import { dadosLivros, converterLivros } from "../dadosLivros.js";
import { realizarEmprestimo } from "../realizarEmprestimo.js";

function testeRealizarEmprestimo() {
    // Conversão inicial
    converterLivros();

    // Mostra livros disponíveis inicialmente
    dadosLivros.forEach((livro) => {
        console.log(livro.getInfo(), "\n");
    });

    // Escolhi o último livro inicial, React para Web
    // Acessado com dadosLivros[dadosLivros.length - 1]
    console.log(dadosLivros[dadosLivros.length - 1].getInfo());

    // Faz o empréstimo de React Para Web
    // A própria função converte o input para maiúsculo
    // então o usuário não precisa digitar em maiúsculo
    realizarEmprestimo("react para web");

    // Verifica que disponivel foi para false
    console.log(
        "Disponível foi para false?",
        dadosLivros[dadosLivros.length - 1].getDisponivel() == false,
    );

    // Tentando realizar empréstimo de um livro que não está disponível
    realizarEmprestimo("ux design");

    // Tentando realizar empréstimo de um livro que não existe
    realizarEmprestimo("Livro que não existe");
}

testeRealizarEmprestimo();
