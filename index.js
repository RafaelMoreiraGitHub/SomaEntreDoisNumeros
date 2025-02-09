const frm = document.querySelector("form"); // resgatando form e guarda em uma variavel js

const volta = document.querySelector("h3"); // resgatando h3 e guarda em uma variavel js

frm.addEventListener("submit", (e) => {
	const n1 = document.getElementById("inNumber1").value; //resgatando o valor do input e guardando em uma variavel js
	const n2 = document.getElementById("inNumber2").value; //resgatando o valor do input e guardando em uma variavel js

	
	const soma = Number ( n1 ) + Number ( n2 ); // calculo. A conversão de texto para numero ocorre dentro da declaração da variavel 
	
	volta.innerText=`A Soma Entre o Primeiro e o Segundo Número é : ${soma}.`; // exibição da soma
	e.preventDefault(); // evita envio do form
} );

function btn(){
	document.getElementById("inNumber1").value=""; // limpa o input
	document.getElementById("inNumber2").value=""; // limpa o input
	document.querySelector("h3").innerText=``; // limpa a tag
}