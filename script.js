function calcular() {
    
    var n1 = parseFloat(document.getElementById("largura").value);
    var n2 = parseFloat(document.getElementById("altura").value);
    var n3 = parseFloat(document.getElementById("comprimento").value);
    
    
    if (isNaN(n1,n2) || !n1 || !n2){
        
        alert("Preencha todos os campos corretamente!")
        return false
    }

    
    var aquario_resultado = ((n1 * n2 * n3)/1000);
    
    document.getElementById("res").innerHTML = aquario_resultado

    ideal()
}


function ideal(aquario_resultado) {

    var img = "img/aaa.jpg"


    if (aquario_resultado > 100) {
        n = ("50w")
        document.getElementById("ind").innerHTML = n
        
        
        // img = "img/peso.png"
    }
    else if (aquario_resultado >= 18.6 && aquario_resultado <= 24.9) {//PESO NORMAL
        img = "img/normal.png"
    }
    else if (aquario_resultado >= 25 && aquario_resultado <= 29.9) {//ACIMA DO PESO
        img = "img/acimadopeso.png"
    }
    else if (aquario_resultado >= 30 && aquario_resultado <= 34.9) {//ACIMA DO PESO
        img = "img/obs1.png"
    }
    else if (aquario_resultado >= 35) {//ACIMA DO PESO
        img = "img/obs2.png"
    }

    document.getElementById("imc_img").src = img

}

