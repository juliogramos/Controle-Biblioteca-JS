import { dadosLivros } from "./dadosLivros.js";

//calcula e exibe estatísticas gerais da biblioteca
export function exibirEstatisticas() {
    // Espaçamento
    console.log("\n");

    //variáveis para armazenar as estatísticas
    const totalLivros = dadosLivros.length;
    let livrosDisponiveis = 0;
    let totalPaginas = 0;

    //percorre livros para verificar disponibilidade e total páginas
    for (let i = 0; i < dadosLivros.length; i++) {
        const livro = dadosLivros[i];

        if (livro.getDisponivel()) {
            livrosDisponiveis++;
        }

        totalPaginas += livro.getPaginas();
    }

    //calculo estatísticas finais
    const livrosIndisponiveis = totalLivros - livrosDisponiveis;

    const mediaPaginas = Math.round(totalPaginas / totalLivros);

    //exibe estatítiscas da biblioteca
    console.log(`Total de livros cadastrados: ${totalLivros}`);
    console.log(`Quantidade de livros disponíveis: ${livrosDisponiveis}`);
    console.log(`Quantidade de livros indisponíveis: ${livrosIndisponiveis}`);
    console.log(
        `Total de páginas considerando todos os livros: ${totalPaginas}`,
    );
    console.log(`Média de páginas por livro: ${mediaPaginas}`);
}
