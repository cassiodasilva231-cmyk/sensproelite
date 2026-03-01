let codigosVIP = JSON.parse(localStorage.getItem("codigosVIP")) || {};

function salvarCodigos(){
localStorage.setItem("codigosVIP", JSON.stringify(codigosVIP));
}

function gerarCodigo(){
let codigo = "VIP-" + Math.random().toString(36).substring(2,10).toUpperCase();

codigosVIP[codigo] = {
usado:false,
expira: Date.now() + (30 * 24 * 60 * 60 * 1000) // 30 dias
};

salvarCodigos();
return codigo;
}

function verificarExpirados(){
for(let c in codigosVIP){
if(Date.now() > codigosVIP[c].expira){
delete codigosVIP[c];
}
}
salvarCodigos();
}

verificarExpirados();
