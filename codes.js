let codigosVIP = JSON.parse(localStorage.getItem("codigosVIP")) || {};

function salvarCodigos(){
localStorage.setItem("codigosVIP", JSON.stringify(codigosVIP));
}

function gerarCodigo(){
let codigo = "VIP-" + Math.random().toString(36).substring(2,8).toUpperCase();

codigosVIP[codigo] = {
usado:false
};

salvarCodigos();
atualizarLista();
}

function atualizarLista(){
let lista = document.getElementById("listaCodigos");
if(!lista) return;

lista.innerHTML = "";

for(let codigo in codigosVIP){
let li = document.createElement("li");
li.innerText = codigo + (codigosVIP[codigo].usado ? " (usado)" : "");
lista.appendChild(li);
}
}

window.onload = atualizarLista;
