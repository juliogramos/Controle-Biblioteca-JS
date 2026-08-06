import PromptSync from "prompt-sync";
import { listarLivros } from "./listarLivros.js";
import { realizarEmprestimo } from "./realizarEmprestimo.js";
import { realizarDevolucao } from "./realizarDevolucao.js";

const prompt = PromptSync();

// Funções de placeholder, serão removidas a medida que as funções de verdade
// ficam prontas
function buscarLivros() {
    console.log("Opção buscar livros foi selecionada");
}

function listarDisponiveis() {
    console.log("Opção listar disponíveis foi selecionada");
}

function cadastrarLivros() {
    console.log("Opção cadastrar livros foi selecionada");
}

function exibirEstatisticas() {
    console.log("Opção exibir estatísticas foi selecionada");
}

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
            buscarLivros();
            break;

        case "3":
            listarDisponiveis();
            break;

        case "4":
            cadastrarLivros();
            break;

        case "5":
            realizarEmprestimo(
                prompt("Digite o nome do livro a ser emprestado: "),
            );
            break;

        case "6":
            realizarDevolucao(
                prompt("Digite o nome do livro a ser devolvido: "),
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
