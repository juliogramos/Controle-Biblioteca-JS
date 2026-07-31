import { Livro } from "./Livro";

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
];

// Essa função converte os objetos de livros para a classe Livro
// Deve ser chamada só uma vez no index.js antes de entrar no loop principal
export function converterLivros() {
    for (let i = 0; i < dadosLivros.length; i++) {
        let livro = dadosLivros[i];
        let novoLivro = new Livro(
            livro.titulo,
            livro.autor,
            livro.categoria,
            livro.paginas,
            livro.disponivel,
        );
    }
}
