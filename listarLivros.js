import { dadosLivros } from "./dadosLivros.js"; //importando array com livros cadastrados

export function listarLivros() {
    //função para listar livros no console

    for (let i = 0; i < dadosLivros.length; i++) {
        //percorrendo os livros do array

        const livro = dadosLivros[i]; //armazenando o livro atual

        //infos do livro
        console.log(`Título: ${livro.getTitulo()}`);
        console.log(`Autor: ${livro.getAutor()}`);
        console.log(`Categoria: ${livro.getCategoria()}`);
        console.log(`Páginas: ${livro.getPaginas()}`);

        //operador ternário para status
        console.log(
            `Status: ${livro.getDisponivel() ? "Disponível" : "Indisponível"}`,
        );

        //divisórias melhoria visual
        console.log("-".repeat(36));
        console.log();
    }
}
