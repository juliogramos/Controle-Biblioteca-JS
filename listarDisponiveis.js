import { dadosLivros } from "./dadosLivros.js";

export function listarDisponiveis() {
    // Espaçamento
    console.log("\n");

    for (let i = 0; i < dadosLivros.length; i++) {
        const livro = dadosLivros[i];

        if (livro.getDisponivel()) {
            console.log(`Título: ${livro.getTitulo()}`);
            console.log(`Autor: ${livro.getAutor()}`);
            console.log(`Categoria: ${livro.getCategoria()}`);
            console.log(`Páginas: ${livro.getPaginas()}`);
            console.log("Status: Disponível");

            //divisórias melhoria visual
            console.log("-".repeat(36));
            console.log("");
        }
    }
}
