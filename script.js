// Extraindo os dados do script "dados"
var dadosScript = document.getElementById('dados');
var dados = JSON.parse(dadosScript.textContent);

// Criando o array de respostas usando as variáveis dinâmicas
var respostas = [
    { nome: dados.name, idade: 25 },
    { nome: dados.name2, idade: 30 },
    { nome: dados.name3, idade: 22 }
];

// Função para exibir os dados na página
function exibirPessoas() {
    var pessoasList = document.getElementById('pessoasList');
    pessoasList.innerHTML = '';

    respostas.forEach(function(pessoa) {
        var listItem = document.createElement('li');
        listItem.textContent = `Nome: ${pessoa.nome}, Idade: ${pessoa.idade}`;
        pessoasList.appendChild(listItem);
    });
}

// Chamando a função para exibir os dados iniciais
exibirPessoas();
