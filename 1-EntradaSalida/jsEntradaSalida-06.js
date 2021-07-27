/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numeroUno;
	var numeroDos;
	var suma;
	
	//numeroUno=txtIdNumeroUno.value;
	numeroUno= document.getElementById("txtIdNumeroUno").value;
	//numeroDos=txtIdNumeroDos.value;
	numeroDos= document.getElementById("txtIdNumeroDos").value;
	
	numeroUno=parseInt(numeroUno);//Parseo
	numeroDos=parseInt(numeroDos);//Parseo
	
	suma=numeroUno + numeroDos;
	
	alert ("El resultado de la suma es " + suma);//operadores aritmeticos +,-,/,*,%(modulo para resto)
}

//txtIdNumeroUno
//txtIdNumeroDos

/*
mientras no asigne un valor a una variable da undefined
Entradas
	prompt
	id.value 
Procesos
Salidas
	alert
	id.value o document.ElementById.value
	console.log se ve en consola
	document.write usa el html



*/