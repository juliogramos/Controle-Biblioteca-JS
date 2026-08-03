import { Livro } from "./Livro.js";

// Pode importar esse dadosLivros em qualquer parte do código
// Só verificar se eles estão convertidos primeiro (função abaixo desse array)
export const dadosLivros = [
    {
        titulo: "JavaScript para Iniciantes",
        autor: "Ana Souza",
        categoria: "Programação",
        paginas: 280,
        disponivel: true,
    },
    {
        titulo: "CSS Moderno",
        autor: "Carlos Lima",
        categoria: "Web Design",
        paginas: 190,
        disponivel: false,
    },
    {
        titulo: "HTML Essencial",
        autor: "Fernanda Rocha",
        categoria: "Programação",
        paginas: 250,
        disponivel: true,
    },
    {
        titulo: "Lógica de Programação",
        autor: "Marcos Silva",
        categoria: "Programação",
        paginas: 320,
        disponivel: true,
    },
    {
        titulo: "Banco de Dados",
        autor: "Juliana Costa",
        categoria: "Banco de Dados",
        paginas: 410,
        disponivel: false,
    },
    {
        titulo: "Git e GitHub",
        autor: "Lucas Pereira",
        categoria: "Ferramentas",
        paginas: 170,
        disponivel: true,
    },
    {
        titulo: "Node.js na Prática",
        autor: "Eduardo Martins",
        categoria: "Programação",
        paginas: 360,
        disponivel: true,
    },
    {
        titulo: "UX Design",
        autor: "Patrícia Alves",
        categoria: "Design",
        paginas: 220,
        disponivel: false,
    },
    {
        titulo: "Angular Completo",
        autor: "Roberto Santos",
        categoria: "Programação",
        paginas: 430,
        disponivel: true,
    },
    {
        titulo: "React para Web",
        autor: "Camila Ferreira",
        categoria: "Programação",
        paginas: 390,
        disponivel: true,
    },
].map((dadoInicial) => {
    return new Livro(
        dadoInicial.titulo,
        dadoInicial.autor,
        dadoInicial.categoria,
        dadoInicial.paginas,
        dadoInicial.disponivel,
    );
});

// A conversão para Livro é feita diretamente aqui na declaração do dadosLivros
// Achei mais conveniente, para não ter que ficar convertendo com uma função
// separada toda hora.
