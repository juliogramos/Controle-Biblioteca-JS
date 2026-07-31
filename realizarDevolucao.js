import { dadosLivros } from "./dadosLivros.js";

export function realizarDevolucao(titulo) {
    const livro = dadosLivros.find(
        (livro) => livro.getTitulo() == titulo.toUpperCase(),
    );

    if (livro !== undefined) {
        livro.setDisponivel(true);
        console.log("Livro devolvido com sucesso!");
    } else {
        console.log("Livro não encontado!");
    }
}
