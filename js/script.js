//Fazer uma referência a cada botão de navegação
const start = document.getElementById("avancar");
const login = document.getElementsByTagName("input")[3];
const setavoltar = document.getElementById("setavoltar");

if(start!=null){
    start.onclick =()=>{
        window.location.href="login.html";
    }
}

if(login!=null){
    login.onclick = ()=>{
        window.location.href="registar.html";
    }
}

if(setavoltar!=null){
setavoltar.onclick = ()=>{
    window.location.href="index.html"
}
}