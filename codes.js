let codigosVIP = JSON.parse(localStorage.getItem("codigosVIP")) || {};

function salvarCodigos(){
localStorage.setItem("codigosVIP", JSON.stringify(codigosVIP));
}

// gerar código VIP
function gerarCodigo(){
let codigo = "VIP-" + Math.random().toString(36).substring(2,10).toUpperCase();

codigosVIP[codigo] = {
usado:false,
expira: Date.now() + (30 * 24 * 60 * 60 * 1000) // 30 dias
};

salvarCodigos();
return codigo;
}

// ativar VIP
function ativarVIP(codigo){
if(codigosVIP[codigo] && !codigosVIP[codigo].usado){
codigosVIP[codigo].usado = true;
salvarCodigos();

localStorage.setItem("vip","true");
alert("VIP ativado!");
location.href="index.html";
}else{
alert("Código inválido ou já usado");
}
}

// verificar VIP
function verificarVIP(){
return localStorage.getItem("vip") === "true";
}

// detectar celular
function detectarCelular(){
let ua = navigator.userAgent.toLowerCase();

if(ua.includes("samsung")) return "Samsung";
if(ua.includes("xiaomi")) return "Xiaomi";
if(ua.includes("motorola")) return "Motorola";
if(ua.includes("iphone")) return "iPhone";
return "Android";
}

// remover códigos expirados
function verificarExpirados(){
for(let c in codigosVIP){
if(Date.now() > codigosVIP[c].expira){
delete codigosVIP[c];
}
}
salvarCodigos();
}

verificarExpirados();
