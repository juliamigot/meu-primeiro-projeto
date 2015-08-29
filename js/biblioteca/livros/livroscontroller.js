angular.module("biblioteca").controller("livroscontroller", controllerLivros);

controllerLivros.$inject = ['livrosfactory'];

function controllerLivros(livrosfactory) {
	this.livros=livrosfactory.livros;
	this.adicionarlivros=livrosfactory.adicionarLivro;

}