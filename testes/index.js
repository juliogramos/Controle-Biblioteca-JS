import PromptSync from "prompt-sync";
const prompt = PromptSync();

function listarLivros() {
 console.log('Opção listar livros foi selecionada');
}

function buscarLivros() {
 console.log('Opção buscar livros foi selecionada');
}

function listarDisponiveis() {
 console.log('Opção listar disponíveis foi selecionada');
}

function cadastrarLivros() {
 console.log('Opção cadastrar livros foi selecionada');
}

function realizarEmprestimo() {
 console.log('Opção realizar empréstimo foi selecionada');
}

function realizarDevolucao() {
 console.log('Opção realizar devolução foi selecionada');
}

function exibirEstatisticas() {
 console.log('Opção exibir estatísticas foi selecionada');
}

function sair() {
 console.log('Opção sair foi selecionada');
}

let option

do {
console.log('================================');
console.log('SISTEMA DE BIBLIOTECA')
console.log('================================');
console.log('                                ');
console.log('1 - Listar livros')
console.log('2 - Buscar livro')
console.log('3 - Listar livros disponíveis')
console.log('4 - Cadastrar livro')
console.log('5 - Realizar empréstimo')
console.log('6 - Realizar devolução')
console.log('7 - Exibir estatísticas')
console.log('0 - Sair')
console.log('                                ');

 option = prompt('');

 switch (option) {
  case '1':
   listarLivros();
   break;

  case '2': 
   buscarLivros();
   break;

  case '3':
   listarDisponiveis();
   break;

  case '4':
   cadastrarLivros();
   break;

  case '5':
   realizarEmprestimo();
   break;

  case '6':
   realizarDevolucao();
   break;

  case '7':
   exibirEstatisticas();
   break;

  case '0':
   sair();
   break;

  default:
  console.log('Opção inválida');
}

} while (option !== '0');