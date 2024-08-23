
const formulario = document.querySelector('#formConta')
const nome = document.getElementById('nomeC');
const errosInner = document.querySelector('.erros');





const validacao = (e) => {
e.preventDefault();

// pegando os valores
const num1 = document.getElementById('num1').value;
const num2 = document.getElementById('num2').value;


//definido os erros
let erro = []

//separando os nomes
const arrayNome = nome.value.split(' ')

//validação
if(arrayNome.length < 2) erro.push('Coloque o nome Completo!') 
if(num1 >= num2) erro.push('o numero1 tem que ser menor do que o numero2!')

//mostar erros
erro.map((item) => errosInner.innerHTML += `<h3>${item}</h3>`)

if(erro.length === 0) errosInner.innerHTML += `<h3>Exatamente! ${num1} é menor que ${num2}!</h3>`

}





formulario.addEventListener('submit', (e) => validacao(e))



