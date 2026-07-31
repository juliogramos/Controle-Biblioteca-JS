export class Livro {
    titulo; // Deve ser em letras maiúsculas, a conversão é feita no constructor
    autor;
    categoria;
    paginas; // Deve ser int, a conversão é feita antes de passar pro constructor
    disponivel; // Deve ser booleana

    constructor(titulo, autor, categoria, paginas, disponivel) {
        this.titulo = titulo.toUpperCase();
        this.autor = autor;
        this.categoria = categoria;
        this.paginas = paginas;
        this.disponivel = disponivel;
    }

    getTitulo() {
        return this.titulo;
    }

    getAutor() {
        return this.autor;
    }

    getCategoria() {
        return this.categoria;
    }

    getPaginas() {
        return this.paginas;
    }

    getDisponivel() {
        return this.disponivel;
    }

    // novaDisponibilidade deve ser booleana
    setDisponivel(novaDisponibilidade) {
        this.disponivel = novaDisponibilidade;
    }
}
