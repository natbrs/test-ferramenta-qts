function carregar(){
    var x = 0; 
    while (x<10){
        console.log(x);
        x++; // x = x + 1;
    }
}

function adicao(){
    var v1 = document.getElementById("valor1").value;
    var v2 = document.getElementById("valor2").value;
    var total = v1 + v2;

    document.getElementById("total").value = total;
}

function subtracao(){
    var v1 = document.getElementById("valor1").value;
    var v2 = document.getElementById("valor2").value;
    var total = v1 - v2;
	
	document.getElementById("total").value = total;
}

function multiplicacao(){
    var v1 = document.getElementById("valor1").value;
    var v2 = document.getElementById("valor2").value;
    var total = v1 * v2;
	
	document.getElementById("total").value = total;
}

function divisao(){
    var v1 = document.getElementById("valor1").value;
    var v2 = document.getElementById("valor2").value;
    var total = v1 / v2;
	
	document.getElementById("total").value = total;
}