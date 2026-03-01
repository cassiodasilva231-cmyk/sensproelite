let codigosVIP = JSON.parse(localStorage.getItem("codigosVIP")) || {};

function salvarCodigos(){
localStorage.setItem("codigosVIP", JSON.stringify(codigosVIP));
}

function gerarCodigo(){
let codigo = "VIP-" + Math.random().toString(36).substring(2,10).toUpperCase();
codigosVIP[codigo] = {
usado:false,
data:Date.now()
};
salvarCodigos();
return codigo;
}
