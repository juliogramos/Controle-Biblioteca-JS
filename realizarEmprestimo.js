import { dadosLivros } from "./dadosLivros.js";

export function realizarEmprestimo(titulo) {
    // Espaçamento
    console.log("\n");

    const livro = dadosLivros.find(
        (livro) => livro.getTitulo() == titulo.toUpperCase(),
    );
    if (livro == undefined || livro.getDisponivel() == false) {
        console.log("Livro indisponível!");
    } else {
        livro.setDisponivel(false);
        console.log("Livro emprestado com sucesso!");
    }
}
