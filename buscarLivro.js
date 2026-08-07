import { dadosLivros } from "./dadosLivros.js"; //importa array que contém os objetos da classe livro

//declara e exporta função para uso em outros arquivos
export function buscarLivro(titulo) {
    // Espaçamento
    console.log("\n");

    titulo = titulo.toUpperCase(); //padronização entrada

    let livroEncontrado = false; //variável de controle, indica livro encontrado na busca

    for (let i = 0; i < dadosLivros.length; i++) {
        //percorre livros do array, i posição atual

        const livro = dadosLivros[i]; //armazena livro posição atual na const

        if (livro.getTitulo() === titulo) {
            //compara livro atual com títuli informado

            //infos caso o livro seja encontrado
            console.log(`Título: ${livro.getTitulo()}`);
            console.log(`Autor: ${livro.getAutor()}`);
            console.log(`Categoria: ${livro.getCategoria()}`);
            console.log(`Páginas: ${livro.getPaginas()}`);
            console.log(
                `Status: ${livro.getDisponivel() ? "Disponível" : "Indisponível"}`,
            ); //status livro

            livroEncontrado = true; //sucesso na busca
            break; //fim laço
        }
    }

    if (!livroEncontrado) {
        //variável valor false?
        console.log("Livro não encontrado!"); //exibe msg
    }
}
