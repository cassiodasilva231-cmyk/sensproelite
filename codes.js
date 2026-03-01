let codigosVIP = JSON.parse(localStorage.getItem("codigosVIP")) || {};

function salvarCodigos(){
localStorage.setItem("codigosVIP", JSON.stringify(codigosVIP));
}
