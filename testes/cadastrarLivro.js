import { cadastrarLivro } from "../cadastrarLivro.js";
import { listarLivros } from "../listarLivros.js";
import { buscarLivro } from "../buscarLivro.js";
import { realizarEmprestimo } from "../realizarEmprestimo.js";

// Mostra dados iniciais
listarLivros();

// A inserção dos dados tem que ser manual já que usa o prompt-sync
// Para conveniência:
// - Título: ABC
// - Autor: a
// - Categoria: b
// - Páginas: 10
cadastrarLivro();

// Verifica que o Livro foi adicionado no final do array
listarLivros();

// Busca o novo livro
buscarLivro("abc");

// Tenta emprestar o novo livro
realizarEmprestimo("abc");
buscarLivro("abc");
