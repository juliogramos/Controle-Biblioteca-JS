import { dadosLivros } from "./dadosLivros.js";

function realizarEmprestimo(titulo) {
    const livro = dadosLivros.find((livro) => livro.titulo == titulo);
    if (livro == undefined || livro.disponivel == false) {
        console.log("Livro indisponível!");
    } else {
        livro.disponivel = false;
        console.log("Livro emprestado com sucesso!");
    }
}
