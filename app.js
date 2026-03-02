const senhaAdmin = "123456"

function login(){
let senha = document.getElementById("senha").value

if(senha === senhaAdmin){
document.getElementById("painel").style.display="block"
}else{
alert("Senha incorreta")
}
}

function gerarCodigo(){

let codigo = "SP" + Math.floor(Math.random()*999999)

supabase
.from("codigos")
.insert([
{
codigo: codigo,
tipo: "premium",
usado: false
}
])
.then(res=>{
document.getElementById("novoCodigo").innerText = "Código: " + codigo
})
}

async function validarCodigo(){

let codigo = document.getElementById("codigo").value

let { data, error } = await supabase
.from("codigos")
.select("*")
.eq("codigo", codigo)
.single()

if(!data){
document.getElementById("resultado").innerText="Código inválido"
return
}

if(data.usado){
document.getElementById("resultado").innerText="Código já usado"
return
}

let dpi = detectarDPI()

await supabase
.from("codigos")
.update({
usado:true,
dpi:dpi,
celular:navigator.userAgent
})
.eq("codigo", codigo)

document.getElementById("resultado").innerText="Ativado! DPI ideal: " + dpi
}

function detectarDPI(){

let largura = screen.width

if(largura < 720) return 320
if(largura < 1080) return 420
return 560
  }
