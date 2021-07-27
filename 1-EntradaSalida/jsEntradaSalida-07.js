/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numeroUno;
	var numeroDos;
	var suma;
	//numeroUno=txtIdNumeroUno.value;
	numeroUno= document.getElementById("txtIdNumeroUno").value;
	//numeroDos=txtIdNumeroDos.value;
	numeroDos= document.getElementById("txtIdNumeroDos").value;
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);
	suma=numeroUno + numeroDos;
	alert ("El resultado de la suma es " + suma);
}

function restar()
{
	var numeroUno;
	var numeroDos;
	var resta;
	//numeroUno=txtIdNumeroUno.value;
	numeroUno= document.getElementById("txtIdNumeroUno").value;
	//numeroDos=txtIdNumeroDos.value;
	numeroDos= document.getElementById("txtIdNumeroDos").value;
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);
	resta=numeroUno - numeroDos;
	alert ("El resultado de la resta es " + resta);
}

function multiplicar()
{ 
	var numeroUno;
	var numeroDos;
	var producto;
	//numeroUno=txtIdNumeroUno.value;
	numeroUno= document.getElementById("txtIdNumeroUno").value;
	//numeroDos=txtIdNumeroDos.value;
	numeroDos= document.getElementById("txtIdNumeroDos").value;
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);
	producto=numeroUno * numeroDos;
	alert ("El resultado de la multiplicación es " + producto);
}

function dividir()
{
	var numeroUno;
	var numeroDos;
	var cociente;
	//numeroUno=txtIdNumeroUno.value;
	numeroUno= document.getElementById("txtIdNumeroUno").value;
	//numeroDos=txtIdNumeroDos.value;
	numeroDos=document.getElementById("txtIdNumeroDos").value;
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);
	cociente=numeroUno / numeroDos;
	alert ("El resultado de la division es " + cociente);
}

//porque si le di parseint en la division me da con decimales?