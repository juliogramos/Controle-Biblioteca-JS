import { listarDisponiveis } from "../listarDisponiveis.js";
import { listarLivros } from "../listarLivros.js";

// Listando todos os livros só para comparação
console.log("TODOS OS LIVROS:");
listarLivros();

// Listando apenas os disponíveis
console.log("\nAPENAS OS LIVROS DISPONÍVEIS:");
listarDisponiveis();
