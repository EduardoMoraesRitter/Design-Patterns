/*
1-faciliatar a manutenção, ele nao pode ser amarada
2-faciliara comunicação, sem gastar tempo de estrutura e enteder o codigo
3-reutilizar codigo
4-granhar performace

(coding patterns)

Design Patterns - sao soluçoes reutilizaveis para problemas comuns na OO. soluçoes solidas, bem documentada, testado tecnicas, reflete experiencias, falcimente adaptados (flequisiveis).

desacoplamento da arquitetura
modulos independentes que se comunicam 
atraves de um mediador.

ganhos:
modulos facilmente testados(automatizadores)
reutilizar o codigo e manter
manutenção melhor
garante a integridade(se um modulo falhar o resto nao é comprometido)

quais:

	Como organizar uma aplicação ultilizando Objetos Literais;

	As diferenças de objetos literais por Module Pattern;

	Como usar o Facade Pattern oferecendo apis elegantes, para reutilizar;

	Como usar o Mediator, um mediador para ser a central de comando, distribuir a responsabilidade;

	Como usar a Herança Prototipal ou Mixins, para reutilizar codigo;
*/

/*
	Objetos Literais - agente consegue dividir a apliccação, encapsulando o codigo em pequans atividades.
problema, nao tem privacidade.
Exemplo:
*/
var
/*
	Module Pattern, fazer pequenos modulos, e oferecendo APIs via Facade Pattern.
funcoes anonimas, e com privacidade
Exemplo:	
*/
var MyModule = (function () {

	//real private. pretty cool!

	var //constants
	CONST_1 = 100,
	CONST_2 = 0,

	_privateMethod = function(){};//funcaçao interna

	return {//API, retonado um objeto literal
		publicMethod: function(){}
	};
}());

/*
	AMD(padrao), proposta fazendo modulos assincrono, para carregar facilmente
*/
	define{
		module_id //opcional
		[dependencias] //opcional
		definition function//function for instantiating the module or ob
	};

/*
	facade pattern, core libs(sao feitas para faciliar o trabalho, 
	quardando trechos complexos de codigo em funcoes simples, 
	que podem ser ultilizadas, aproveitando do recurso de xaine caiamento 
	de funcoes, retornado o proprio objeto, q esta sendo ultilizado, 
	um metodo encadiado no outro, auto nivel de abstração)
*/
	










