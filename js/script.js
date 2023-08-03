var resultado = document.getElementById("resultado");

function verificarCero(){
    if(resultado.textContent == "0"){
        resultado.innerHTML = "30";
        return true;
    }else{
        return false;
    }
}

function prueba(){
    window.alert(verificarCero());
}