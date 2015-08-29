angular.module("biblioteca").factory("livros", factoryLivros);


function factoryLivros() {

	var livros =[];

	function adicionarLivro(livro) {
		livros.push(livro)
	}


	return {
		livros: livros,
		adicionarLivro: adicionarLivro
	}
}

