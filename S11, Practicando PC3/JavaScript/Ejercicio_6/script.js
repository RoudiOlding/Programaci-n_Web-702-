let resultado2 = 0;

function calcuSumar(){
    const num = document.getElementById("num").value;

    const resultado = parseInt(num) + parseInt(resultado2);
    document.getElementById("resultado").innerHTML=resultado;
    resultado2 = resultado;
    document.getElementById("num").value = "";
}

function calcuRestar(){
    const num1 = document.getElementById("num").value;
    const result3 =  parseInt(resultado2) - parseInt(num1);
    resultado2 = result3;
    document.getElementById("resultado").innerHTML = result3;
    document.getElementById("num").value = "";
}

function calcuMulti(){
    const num3 = document.getElementById("num").value;
    const result5 = parseInt(resultado2) * parseInt(num3);
    resultado2 = result5;
    document.getElementById("resultado").innerHTML = resultado2;
    document.getElementById("num").value = "";
}

function calcuDivi(){
    const num = document.getElementById("num").value;
    const resultado = parseInt(resultado2) / parseInt(num);
    resultado2 = resultado;
    document.getElementById("resultado").innerHTML = resultado2;
    document.getElementById("num").value = "";
}