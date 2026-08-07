import { cadastrarLivro } from "../cadastrarLivro.js";
import { dadosLivros } from "../dadosLivros.js";

// Mostra dados iniciais
dadosLivros.forEach((livro) => console.log("\n", livro.getInfo()));

// A inserção dos dados tem que ser manual já que usa o prompt-sync
// Para conveniência:
// - Título: ABC
// - Autor: a
// - Categoria: b
// - Páginas: 10
cadastrarLivro();

// Verifica que o Livro foi adicionado no final do array
console.log(dadosLivros[dadosLivros.length - 1].getInfo());
