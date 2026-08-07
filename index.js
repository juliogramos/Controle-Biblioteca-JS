import PromptSync from "prompt-sync";
import { listarLivros } from "./listarLivros.js";
import { realizarEmprestimo } from "./realizarEmprestimo.js";
import { realizarDevolucao } from "./realizarDevolucao.js";
import { buscarLivro } from "./buscarLivro.js";
import { listarDisponiveis } from "./listarDisponiveis.js";
import { cadastrarLivro } from "./cadastrarLivro.js";
import { exibirEstatisticas } from "./exibirEstatisticas.js";

const prompt = PromptSync();

function sair() {
    console.log("Opção sair foi selecionada");
}

let option;

do {
    console.log("================================");
    console.log("SISTEMA DE BIBLIOTECA");
    console.log("================================");
    console.log("                                ");
    console.log("1 - Listar livros");
    console.log("2 - Buscar livro");
    console.log("3 - Listar livros disponíveis");
    console.log("4 - Cadastrar livro");
    console.log("5 - Realizar empréstimo");
    console.log("6 - Realizar devolução");
    console.log("7 - Exibir estatísticas");
    console.log("0 - Sair");
    console.log("                                ");

    option = prompt("");

    switch (option) {
        case "1":
            listarLivros();
            break;

        case "2":
            buscarLivro(prompt("Digite o título do livro a ser buscado: "));
            break;

        case "3":
            listarDisponiveis();
            break;

        case "4":
            cadastrarLivro();
            break;

        case "5":
            realizarEmprestimo(
                prompt("Digite o título do livro a ser emprestado: "),
            );
            break;

        case "6":
            realizarDevolucao(
                prompt("Digite o título do livro a ser devolvido: "),
            );
            break;

        case "7":
            exibirEstatisticas();
            break;

        case "0":
            sair();
            break;

        default:
            console.log("Opção inválida");
    }
} while (option !== "0");
