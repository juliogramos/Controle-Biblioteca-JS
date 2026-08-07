import { dadosLivros } from "./dadosLivros.js";
import { Livro } from "./Livro.js";
import PromptSync from "prompt-sync";

// Tem que fazer desse jeito já que não pode usar o require com type = module
const prompt = PromptSync();

export function cadastrarLivro() {
    // Variáveis de controle, deixam o usuário em um loop até que ele insira
    // os dados corretamente
    let tituloValido = false;
    let autorValido = false;
    let categoriaValida = false;
    let paginasValidas = false;

    // Para guardar os dados antes de criar uma instância de Livro
    let titulo;
    let autor;
    let categoria;
    let paginas;

    // Espaçamento
    console.log("\n");

    // Inserção do título
    // Deve ser tudo maiúsculo conforme o enunciado (e não vazio)
    do {
        let novoTitulo = prompt("Digite o título em letras maiúsculas: ");
        if (!novoTitulo) {
            console.log("Erro: Insira um título!");
        } else if (novoTitulo != novoTitulo.toUpperCase()) {
            console.log("Erro: Digite o título em letras maiúsculas!");
        } else {
            titulo = novoTitulo;
            tituloValido = true;
        }
    } while (!tituloValido);

    // Inserção do autor
    // Deve ser não vazio
    do {
        let novoAutor = prompt("Digite o autor: ");
        if (!novoAutor) {
            console.log("Erro: Insira o autor!");
        } else {
            autor = novoAutor;
            autorValido = true;
        }
    } while (!autorValido);

    // Inserção da categoria
    // Deve ser não vazia
    do {
        let novaCategoria = prompt("Digite a categoria: ");
        if (!novaCategoria) {
            console.log("Erro: Insira a categoria!");
        } else {
            categoria = novaCategoria;
            categoriaValida = true;
        }
    } while (!categoriaValida);

    // Inserção do número de páginas
    // Deve ser não vazio e um número inteiro
    do {
        let novasPaginas = Number(prompt("Digite o número de páginas: "));

        // Acontece se for vazio
        if (novasPaginas == 0) {
            console.log("Erro: Insira o número de páginas!");
        } else if (!Number.isInteger(novasPaginas)) {
            console.log("Erro: Insira um número inteiro!");
        } else {
            paginas = novasPaginas;
            paginasValidas = true;
        }
    } while (!paginasValidas);

    // Cria o Livro passando disponivel como true
    const livro = new Livro(titulo, autor, categoria, paginas, true);
    dadosLivros.push(livro);
    console.log("Livro cadastrado com sucesso!");
}
